import type { RouteLocationNamedRaw } from 'vue-router'

export const enum AppRoutes {
	index = 'index',
	auth = 'auth',
	login = 'login',
	register = 'register',
	passwordRecovery = 'password-recovery',
	contentSlugs = 'content-slugs',
	personalArea = 'personal-area',
	personalAreaFaq = 'personal-area-faq',
	personalAreaMyServers = 'personal-area-my-servers',
	personalAreaCreateServer = 'personal-area-create-server',
	personalAreaCreateTicket = 'personal-area-create-ticket',
	personalAreaProfile = 'personal-area-profile',
	personalAreaProfilePrivateData = 'personal-area-profile-private-data',
	personalAreaProfileSafety = 'personal-area-profile-safety',
	personalAreaProfileAccess = 'personal-area-profile-access',
	personalAreaProfileNotifications = 'personal-area-profile-notifications',
	personalAreaProfileActiveSessions = 'personal-area-profile-activeSessions',
	personalAreaBalance = 'personal-area-balance',
	personalAreaBalancePayment = 'personal-area-balance-payment',
	personalAreaBalanceHistory = 'personal-area-balance-history',
	personalAreaBalanceFuturePayments = 'personal-area-balance-future-payments',
	personalAreaBalanceAutoPayment = 'personal-area-balance-auto-payment',
	personalAreaDocuments = 'personal-area-documents',
	personalAreaDocumentsChecks = 'personal-area-documents-checks',
	personalAreaDocumentsServiceActs = 'personal-area-documents-service-acts',
	personalAreaDocumentsReconciliations = 'personal-area-documents-reconciliations',
	personalAreaDocumentsInvoices = 'personal-area-documents-invoices',
}

export interface AppRoute extends RouteLocationNamedRaw {
	name: AppRoutes
}
