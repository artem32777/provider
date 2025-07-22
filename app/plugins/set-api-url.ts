import { defineNuxtPlugin } from '#imports'
import { filesAPI } from '~/src/shared/api/v1/files'

export default defineNuxtPlugin(_ => {
	const config = useRuntimeConfig().public

	filesAPI.S3_URL = config.S3_URL
})
