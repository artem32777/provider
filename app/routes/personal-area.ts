import { AppLayouts } from '../layouts/app-layouts'
import { AppRoutes } from '~/src/shared/router/types'
import type { RouteRecordRaw } from '#vue-router'

export const personalAreaRoutes: RouteRecordRaw[] = [
	{
		name: AppRoutes.personalArea,
		path: `/${AppRoutes.personalArea}`,
		meta: {
			layout: AppLayouts.personalArea,
			middleware: ['auth'],
		},
		component: () => import('~/src/pages/personal-area/ui/index.vue'),
		children: [
			{
				name: AppRoutes.personalAreaFaq,
				path: 'faq',
				component: () => import('~/src/pages/faq/ui/index.vue'),
			},
			{
				name: AppRoutes.personalAreaMyServers,
				path: 'my-servers',
				component: () => import('~/src/pages/my-servers/ui/index.vue'),
			},
			{
				name: AppRoutes.personalAreaCreateServer,
				path: 'create-server',
				component: () => import('~/src/pages/create-server/ui/index.vue'),
			},
			{
				name: AppRoutes.personalAreaCreateTicket,
				path: 'create-ticket',
				component: () => import('~/src/pages/create-ticket/ui/index.vue'),
			},
			{
				name: AppRoutes.personalAreaProfile,
				path: 'profile',
				component: () => import('~/src/pages/personal-area-profile/ui/index.vue'),
				children: [
					{
						name: AppRoutes.personalAreaProfilePrivateData,
						path: 'private-data',
						component: () => import('~/src/pages/personal-area-profile-private-data/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaProfileSafety,
						path: 'safety',
						component: () => import('~/src/pages/personal-area-profile-safety/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaProfileAccess,
						path: 'access',
						component: () => import('~/src/pages/personal-area-profile-access/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaProfileNotifications,
						path: 'notifications',
						component: () => import('~/src/pages/personal-area-profile-notifications/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaProfileActiveSessions,
						path: 'sessions',
						component: () => import('~/src/pages/personal-area-profile-active-sessions/ui/index.vue'),
					},
				],
			},
			{
				name: AppRoutes.personalAreaBalance,
				path: 'balance',
				component: () => import('~/src/pages/personal-area-balance/ui/index.vue'),
				children: [
					{
						name: AppRoutes.personalAreaBalancePayment,
						path: 'payment',
						component: () => import('~/src/pages/personal-area-balance-payment/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaBalanceHistory,
						path: 'history',
						component: () => import('~/src/pages/personal-area-balance-history/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaBalanceFuturePayments,
						path: 'future-payments',
						component: () => import('~/src/pages/personal-area-balance-future-payments/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaBalanceAutoPayment,
						path: 'auto-payment',
						component: () => import('~/src/pages/personal-area-balance-auto-payment/ui/index.vue'),
					},
				],
			},
			{
				name: AppRoutes.personalAreaDocuments,
				path: 'documents',
				component: () => import('~/src/pages/personal-area-documents/ui/index.vue'),
				children: [
					{
						name: AppRoutes.personalAreaDocumentsChecks,
						path: 'checks',
						component: () => import('~/src/pages/personal-area-documents-checks/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaDocumentsServiceActs,
						path: 'service-acts',
						component: () => import('~/src/pages/personal-area-documents-service-acts/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaDocumentsReconciliations,
						path: 'reconciliations',
						component: () => import('~/src/pages/personal-area-documents-reconciliations/ui/index.vue'),
					},
					{
						name: AppRoutes.personalAreaDocumentsInvoices,
						path: 'invoices',
						component: () => import('~/src/pages/personal-area-documents-invoices/ui/index.vue'),
					},
				],
			},
		],
	},
]
