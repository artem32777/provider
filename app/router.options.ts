import type { RouterConfig } from '@nuxt/schema'
import { personalAreaRoutes } from './routes/personal-area'
import { authRoutes } from './routes/auth'
import { AppRoutes } from '~/src/shared/router/types'

// https://router.vuejs.org/
export default {
	scrollBehaviorType: 'smooth',
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (routes) => [
		...routes,
		{
			name: AppRoutes.index,
			path: '/',
			component: () => import('~/src/pages/main/ui/index.vue'),
		},
		...authRoutes,
		...personalAreaRoutes,
		{
			name: AppRoutes.contentSlugs,
			path: '/:slugs+',
			component: () => import('~/src/pages/content-slugs/ui/index.vue'),
		},
	],
} satisfies RouterConfig
