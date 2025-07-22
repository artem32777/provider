import { AppRoutes } from '../types'
import { SitemapRoute } from './SitemapRoute'

const main = new SitemapRoute(
	'Главная',
	AppRoutes.index,
)

const register = new SitemapRoute(
	'Регистрация',
	AppRoutes.register,
)

const login = new SitemapRoute(
	'Авторизация',
	AppRoutes.login,
)

const passwordRecovery = new SitemapRoute(
	'Восстановление пароля',
	AppRoutes.passwordRecovery,
)

const personalArea = new SitemapRoute(
	'Личный кабинет',
	AppRoutes.personalArea,
)

const personalAreaProfile = new SitemapRoute(
	'Профиль',
	AppRoutes.personalAreaProfile,
)

const personalAreaProfilePrivateData = new SitemapRoute(
	'Личные данные',
	AppRoutes.personalAreaProfilePrivateData,
)

const personalAreaProfileSafety = new SitemapRoute(
	'Безопасность',
	AppRoutes.personalAreaProfileSafety,
)

const personalAreaProfileAccess = new SitemapRoute(
	'Доступ',
	AppRoutes.personalAreaProfileAccess,
)

const personalAreaProfileNotifications = new SitemapRoute(
	'Уведомления',
	AppRoutes.personalAreaProfileNotifications,
)

const personalAreaProfileActiveSessions = new SitemapRoute(
	'Активные сессии',
	AppRoutes.personalAreaProfileActiveSessions,
)

const personalAreaFAQ = new SitemapRoute(
	'FAQ',
	AppRoutes.personalAreaFaq,
)

const personalAreaMyServers = new SitemapRoute(
	'Мои серверы',
	AppRoutes.personalAreaMyServers,
)

const personalAreaCreateServer = new SitemapRoute(
	'Создать сервер',
	AppRoutes.personalAreaCreateServer,
)

const personalAreaBalance = new SitemapRoute(
	'Баланс и платежи',
	AppRoutes.personalAreaBalance,
)

const personalAreaBalancePayment = new SitemapRoute(
	'Оплата',
	AppRoutes.personalAreaBalancePayment,
)

const personalAreaBalanceHistory = new SitemapRoute(
	'История платежей',
	AppRoutes.personalAreaBalancePayment,
)

const personalAreaBalanceFuturePayments = new SitemapRoute(
	'Предстоящие платежи',
	AppRoutes.personalAreaBalanceFuturePayments,
)

const personalAreaBalanceAutoPayment = new SitemapRoute(
	'Автоплатеж',
	AppRoutes.personalAreaBalanceAutoPayment,
)

const personalAreaDocuments = new SitemapRoute(
	'Финансовые документы',
	AppRoutes.personalAreaDocuments,
)

const personalAreaDocumentsChecks = new SitemapRoute(
	'Электронные чеки',
	AppRoutes.personalAreaDocumentsChecks,
)

const personalAreaDocumentsServiceActs = new SitemapRoute(
	'Акты об оказании услуг',
	AppRoutes.personalAreaDocumentsServiceActs,
)

const personalAreaDocumentsReconciliations = new SitemapRoute(
	'Акты-сверки',
	AppRoutes.personalAreaDocumentsReconciliations,
)

const personalAreaDocumentsInvoices = new SitemapRoute(
	'Счет-фактуры',
	AppRoutes.personalAreaDocumentsInvoices,
)

const personalAreaCreateTicket = new SitemapRoute(
	'Создать тикет',
	AppRoutes.personalAreaCreateTicket,
)

const privacy = new SitemapRoute(
	'Политика обработки данных',
	{
		name: AppRoutes.contentSlugs,
		params: {
			slugs: 'privacy',
		},
	},
)

const docs = new SitemapRoute(
	'Документация',
	{
		name: AppRoutes.contentSlugs,
		params: {
			slugs: 'docs',
		},
	},
)

const requisites = new SitemapRoute(
	'Реквизиты и лицензии',
	{
		name: AppRoutes.contentSlugs,
		params: {
			slugs: 'requisites',
		},
	},
)

export const SITEMAP = {
	main,
	register,
	login,
	passwordRecovery,
	personalArea,
	personalAreaProfile,
	personalAreaProfilePrivateData,
	personalAreaProfileSafety,
	personalAreaProfileAccess,
	personalAreaProfileNotifications,
	personalAreaProfileActiveSessions,
	personalAreaFAQ,
	personalAreaMyServers,
	personalAreaCreateServer,
	personalAreaBalance,
	personalAreaBalancePayment,
	personalAreaBalanceHistory,
	personalAreaBalanceFuturePayments,
	personalAreaBalanceAutoPayment,
	personalAreaDocuments,
	personalAreaDocumentsChecks,
	personalAreaDocumentsServiceActs,
	personalAreaDocumentsReconciliations,
	personalAreaDocumentsInvoices,
	personalAreaCreateTicket,
	privacy,
	docs,
	requisites,
} as const
