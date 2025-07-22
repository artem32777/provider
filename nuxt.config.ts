import type { ProxyOptions } from '@nuxt-alt/proxy'
import { IS_DEVELOPMENT, IS_PRODUCTION } from './src/shared/config'

const IS_PROD_STAND = process.env.IS_PROD_STAND
const API_URL = process.env.NUXT_ENV_API_URL
const browserBaseURL = IS_PRODUCTION ? API_URL : ''

export default defineNuxtConfig({
	modules: [
		'@nuxt-alt/auth',
		'@nuxt-alt/proxy',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@nuxt/ui',
		'@nuxt/eslint',
	],

	plugins: [
		'~/app/plugins/set-api-url',
		'~/app/plugins/http',
		{ src: '~/app/plugins/vue-final-modal', ssr: false },
		{ src: '~/app/plugins/maska', ssr: false },
	],

	components: [
		{
			path: '~/src/shared/ui/server',
			global: true,
		},
	],

	devtools: { enabled: IS_DEVELOPMENT },
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'robots', content: 'noindex, nofollow' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0',
				},
				{
					name: 'format-detection',
					content: 'telephone=no, date=no, address=no, email=no',
				},
			],
			link: [
				{ rel: 'icon', href: '/favicon.ico' },
				{
					rel: 'preload',
					href: '/img/main-page/hero.webp',
					as: 'image',
					type: 'image/webp',
					media: '(min-width: 1025px)',
					fetchpriority: 'high',
				},
				{
					rel: 'preload',
					href: '/img/main-page/hero-mobile.webp',
					as: 'image',
					type: 'image/webp',
					media: '(max-width: 1024px)',
					fetchpriority: 'high',
				},
				{
					rel: 'preload',
					href: '/fonts/Inter-Regular.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: '',
				},
				{
					rel: 'preload',
					href: '/fonts/Inter-Bold.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: '',
				},
			],
			style: [
				{
					innerHTML: `
            @font-face {
              font-family: 'Inter';
              src: url('/fonts/Inter-Regular.woff2') format('woff2');
              font-weight: 400;
              font-display: block;
            }
            @font-face {
              font-family: 'Inter';
              src: url('/fonts/Inter-Bold.woff2') format('woff2');
              font-weight: 700;
              font-display: block;
            }
          `,
				},
			],
			script: IS_PROD_STAND ? [] : [],
		},
	},

	colorMode: {
		preference: 'light',
	},

	ui: {
		theme: {
			colors: [
				'primary',
				'secondary',
				'info',
				'success',
				'warning',
				'error',
				'neutral',
				'slate',
			],
		},
	},

	runtimeConfig: {
		public: {
			API_URL,
			S3_URL: process.env.NUXT_ENV_S3_URL,
			imgProxyHost: process.env.IMG_PROXY_HOST ?? '',
			imgProxySalt: process.env.IMG_PROXY_SALT ?? '',
			imgProxyKey: process.env.IMG_PROXY_KEY ?? '',
			isImgProxyEnvVariablesEmpty:
																!process.env.IMG_PROXY_HOST || !process.env.IMG_PROXY_SALT || !process.env.IMG_PROXY_KEY,
		},
	},

	dir: {
		layouts: './app/layouts/ui',
	},

	compatibilityDate: '2024-11-01',

	nitro: {
		preset: 'vercel',
		routeRules: {
			'/': { prerender: true, isr: 3600 },
			'/auth/**': { ssr: false },
			'/personal-area/**': { ssr: false },
		},
	},

	// fix for vercel build with prisma
	// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/prisma-nuxt-module
	// vite: {
	// 	resolve: {
	// 		alias: {
	// 			'.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
	// 		},
	// 	},
	// },

	typescript: {
		typeCheck: true,
	},

	auth: {
		globalMiddleware: false,
		routerStrategy: 'navigateTo',
		watchLoggedIn: true,
		// @ts-ignore
		redirect: {
			login: '/auth/login',
			logout: '/',
			home: '/',
		},

		stores: {
			state: {
				namespace: 'auth',
			},
			pinia: {
				enabled: false,
				namespace: 'auth',
			},
			cookie: {
				enabled: true,
				prefix: 'auth.',
				options: {
					path: '/',
					sameSite: 'lax',
					maxAge: 31536000,
				},
			},
			local: {
				enabled: false,
				prefix: 'auth.',
			},
		},

		strategies: {
			local: {
				// @ts-ignore
				scheme: './src/shared/auth/schemes/AppRefreshScheme',
				user: {
					property: 'data',
					autoFetch: true,
				},
				token: {
					property: 'data.accessToken',
					maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
					global: true,
					name: 'authorization',
				},
				refreshToken: {
					property: 'data.refreshToken',
					data: 'refreshToken',
					maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
				},
				endpoints: {
					user: {
						url: `${browserBaseURL}/api/v1/user/profile`,
						method: 'get',
					},
					login: {
						url: `${browserBaseURL}/api/v1/auth/login`,
						method: 'post',
					},
					refresh: {
						url: `${browserBaseURL}/api/v1/auth/refresh`,
						method: 'post',
					},
					logout: {
						url: `${browserBaseURL}/api/v1/auth/logout`,
						method: 'delete',
					},
				},
			},
		},
	},

	eslint: {
		checker: IS_DEVELOPMENT,
		config: {
			typescript: true,
			// Чтобы правила вступили в силу, необходимо выполнить npm run postinstall и перезагрузить ESLint
			stylistic: {
				indent: 'tab',
				semi: false,
				quotes: 'single',
				commaDangle: 'always-multiline',
				braceStyle: '1tbs',
			},
		},
	},

	http: {
		baseURL: API_URL,
		browserBaseURL,
		debug: Boolean(process.env.NUXT_ENV_HTTP_DEBUG),
	},

	icon: {
		clientBundle: {
			scan: true,
			includeCustomCollections: true,
		},
		customCollections: [
			{
				prefix: 'local',
				dir: './src/shared/icons/local',
				normalizeIconName: false,
			},
		],
	},

	proxy: IS_DEVELOPMENT
		? {
				proxies: getProxies([
					'/api/v1',
					'/api/user',
				]),
			}
		: undefined,
})

function getProxies(urls: string[]) {
	const proxies: Record<string, ProxyOptions> = {}

	urls.forEach(url => {
		proxies[url] = {
			target: API_URL,
			changeOrigin: true,
		}
	})

	return proxies
}
