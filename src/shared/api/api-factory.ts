import type { FetchConfig, FetchInstance } from '@refactorjs/ofetch'

interface ApiFactorySettings {
	urlPrefix?: string
}

export function apiFactory(instance: FetchInstance, settings?: ApiFactorySettings) {
	return {
		urlPrefix: settings?.urlPrefix || '',

		async $get<T = unknown>(url: string, config?: FetchConfig): Promise<T> {
			return await instance.$get(`${this.urlPrefix}${url}`, config)
		},

		async $post<T = unknown>(url: string, config?: FetchConfig): Promise<T> {
			return await instance.$post(`${this.urlPrefix}${url}`, config)
		},

		async $patch<T = unknown>(url: string, config?: FetchConfig): Promise<T> {
			return await instance.$patch(`${this.urlPrefix}${url}`, config)
		},

		async $put<T = unknown>(url: string, config?: FetchConfig): Promise<T> {
			return await instance.$put(`${this.urlPrefix}${url}`, config)
		},

		async $delete<T = unknown>(url: string, config?: FetchConfig): Promise<T> {
			return await instance.$delete(`${this.urlPrefix}${url}`, config)
		},
	}
}
