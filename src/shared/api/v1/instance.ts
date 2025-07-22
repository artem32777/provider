import type { ReturnType } from 'birpc'
import type { FetchInstance } from '@refactorjs/ofetch'
import { apiFactory } from '../api-factory'

export function useV1Api() {
	return useNuxtApp().$v1Api as ReturnType<typeof apiFactory>
}

export function createV1Api(instance: FetchInstance) {
	return apiFactory(instance, {
		urlPrefix: '/api/v1',
	})
}
