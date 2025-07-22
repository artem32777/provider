import { Buffer } from 'buffer'
import type { Ref } from 'vue'
import * as hash from 'hash.js'
import type { WithImplicitCoercion } from 'node:buffer'

type ImgProxyData = {
	originPath: string
	height: number
	width: number
	host: string
	key: string
	salt: string
	fitImg: boolean
	isRetina?: boolean
	webp?: boolean
}

type HexCode = WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: 'string'): string }

function urlSafeBase64(string: string) {
	return Buffer.from(string, 'utf8').toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

function hexDecode(hex: HexCode) {
	return Buffer.from(hex, 'hex')
}
function sign(salt: string, target: string, secret: string) {
	const hmac = hash.hmac(hash.sha256 as unknown as BlockHash<Sha256>, hexDecode(secret))
	hmac.update(hexDecode(salt))
	hmac.update(target)

	return urlSafeBase64(hmac.digest() as unknown as string)
}

function getPath(data: ImgProxyData) {
	const path = `/rs:${data.fitImg ? 'fit' : 'fill'}:${data.width * (data.isRetina ? 2 : 1)}:${data.height * (data.isRetina ? 2 : 1)}/g:ce/plain/${data.originPath}${data.webp ? '@webp' : ''}`
	const signature = sign(data.salt, path, data.key)
	return `${data.host}/${signature}${path}`
}

export const useImgProxy = (elWidth: Ref<number>, elHeight: Ref<number>, fitImg: boolean) => {
	const config = useRuntimeConfig()

	const src1xWebp = ref('')
	const src2xWebp = ref('')
	const src1x = ref('')
	const src2x = ref('')

	function setPath(originSrc: string, data: { isRetina?: boolean, isWebp?: boolean } = {}) {
		const imgProxyPayload: ImgProxyData = {
			originPath: originSrc,
			height: Math.ceil(elHeight.value),
			width: Math.ceil(elWidth.value),
			host: config.public.imgProxyHost as string,
			key: config.public.imgProxyKey,
			salt: config.public.imgProxySalt,
			fitImg,
			isRetina: data.isRetina,
			webp: data.isWebp,
		}

		if (elWidth.value <= 80) {
			imgProxyPayload.height = Math.ceil(imgProxyPayload.height * 1.3)
			imgProxyPayload.width = Math.ceil(imgProxyPayload.width * 1.3)
		}

		return getPath(imgProxyPayload) || originSrc
	}

	function setProxyImages(originSrc: string) {
		const isIncorrectOptions = !originSrc.startsWith('http') || !elWidth.value || !elHeight.value

		if (config.public.isImgProxyEnvVariablesEmpty || isIncorrectOptions) {
			src1xWebp.value = originSrc
			src2xWebp.value = originSrc
			src1x.value = originSrc
			src2x.value = originSrc
		} else {
			src1xWebp.value = setPath(originSrc, { isWebp: true })
			src2xWebp.value = setPath(originSrc, { isWebp: true, isRetina: true })
			src1x.value = setPath(originSrc)
			src2x.value = setPath(originSrc, { isRetina: true })
		}
	}

	return {
		src1x,
		src2x,
		src1xWebp,
		src2xWebp,
		setProxyImages,
	}
}
