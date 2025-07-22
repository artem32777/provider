import type { UUID } from 'node:crypto'
import { useV1Api } from '~/src/shared/api/v1/instance'
import type { SuccessResponseV1 } from '~/src/shared/api/v1/types'
import type { EntityUpload, Upload } from '~/src/shared/api/types'
import { useFilesSizeValidator } from '~/src/shared/lib/composables/use-files-size-validator'
import type { FilesSizeValidatorOptions } from '~/src/shared/lib/composables/use-files-size-validator'

export namespace FilesAPI {
	export namespace PostFileList {
		export interface Options {
			validation?: FilesSizeValidatorOptions
		}
	}
}

export const filesAPI = {
	async postFileList(
		files: FileList,
    options: FilesAPI.PostFileList.Options = {},
	) {
		const formData = new FormData()

		if (options.validation) {
			useFilesSizeValidator(options.validation).addFilesToFormData(files, formData)
		} else {
			Array.from(files).forEach(file => {
				formData.append('files', file)
			})
		}

		const { data } = await this.postFile(formData)

		return data
	},

	async postFile(body: FormData) {
		return await useV1Api().$post<SuccessResponseV1<Upload[]>>('/files', { body })
	},

	getURL(upload: Upload) {
		if (typeof upload.path === 'string') {
			return upload.path
		}

		return this.getPublicURL(upload.id)
	},

	S3_URL: '',

	getPublicURL(id: UUID) {
		return `${this.S3_URL}/${id}`
	},

	getUploads(list: EntityUpload[]): Upload[] {
		const arr: Upload[] = []

		list.forEach(item => {
			if (item.file) {
				arr.push(item.file)
			}
		})

		return arr
	},

	isEntityUploads(list: Upload[] | EntityUpload[]): list is EntityUpload[] {
		return list[0] && 'file' in list[0]
	},
}
