import type { AppRoutes, AppRoute } from '~/src/shared/router/types'
import type { RouteLocationNamedRaw } from '#vue-router'

type GetAppRoutePayload = Pick<RouteLocationNamedRaw, 'params' | 'query' | 'hash'>

export class SitemapRoute<T = GetAppRoutePayload> {
	name = ''
	icon?: string
	route: AppRoute

	constructor(
		name: string,
		route: AppRoutes | AppRoute,
		options: {
			icon?: string
		} = {},
	) {
		this.name = name

		this.route = typeof route === 'string'
			? {
					name: route,
				}
			: route

		this.icon = options.icon
	}

	getRoute(payload: T): AppRoute {
		return {
			...this.route,
			...payload,
		}
	}
}
