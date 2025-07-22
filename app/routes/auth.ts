import { AppLayouts } from '../layouts/app-layouts'
import { AppRoutes } from '~/src/shared/router/types'
import type { RouteRecordRaw } from '#vue-router'

export const authRoutes: RouteRecordRaw[] = [
	{
		name: AppRoutes.auth,
		path: `/${AppRoutes.auth}`,
		meta: { layout: AppLayouts.auth },
		redirect: { name: AppRoutes.login },
		children: [
			{
				name: AppRoutes.login,
				path: AppRoutes.login,
				component: () => import('~/src/pages/login/ui/index.vue'),
			},
			{
				name: AppRoutes.register,
				path: AppRoutes.register,
				component: () => import('~/src/pages/register/ui/index.vue'),
			},
			{
				name: AppRoutes.passwordRecovery,
				path: AppRoutes.passwordRecovery,
				component: () => import('~/src/pages/password-recovery/ui/index.vue'),
			},
		],
	},

]
