import { defineNuxtPlugin } from '#imports'
import { createV1Api } from '~/src/shared/api/v1/instance'
import { throwApiError } from '~/src/shared/api/throw-api-error'

export default defineNuxtPlugin(nuxtApp => {
	const instance = getFetchInstance()

	instance.onResponseError(throwApiError)

	nuxtApp.$v1Api = createV1Api(instance)

	function getFetchInstance() {
		return import.meta.server ? nuxtApp.ssrContext!.event.$http : $http
	}
})
