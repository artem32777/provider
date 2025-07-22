import type { FetchConfig } from '@refactorjs/ofetch'
import { ExpiredAuthSessionError, RequestHandler } from '#auth/runtime'

export class AppRequestHandler extends RequestHandler {
	authEndpoints: Set<string>

	constructor(...args: ConstructorParameters<typeof RequestHandler>) {
		super(...args)

		this.authEndpoints = this.#getAuthEndpoints()
	}

	override initializeRequestInterceptor(refreshEndpoint: string) {
		this.requestInterceptor = this.http.onRequest(async config => {
			if (this.scheme.options.token && this.currentToken) {
				this.setHeader(this.currentToken)
			}

			if (config.url === refreshEndpoint) {
				return config
			}

			// @ts-ignore
			const { valid, tokenExpired, refreshTokenExpired, isRefreshable } = this.scheme.check(true)

			let isValid = valid

			if (refreshTokenExpired) {
				this.scheme.reset?.()
				throw new ExpiredAuthSessionError()
			}

			if (tokenExpired) {
				if (!isRefreshable) {
					this.scheme.reset?.()
					throw new ExpiredAuthSessionError()
				}

				// @ts-ignore
				isValid = await this.scheme.refreshController
					.handleRefresh()
					.then(() => true)
					.catch(() => {
						this.scheme.reset?.()
						throw new ExpiredAuthSessionError()
					})
			}

			const token = this.scheme.token

			if (!isValid) {
				if (token && !token.get()) {
					if (this.#requestHasAuthorizationHeader(config) && this.#isAuthEndpoint(config)) {
						throw new ExpiredAuthSessionError()
					} else {
						this.#removeRequestConfigHeadersToken(config)
					}
				}
				return config
			}

			return this.#getUpdatedRequestConfig(config, token ? token.get() : false)
		})

		this.responseErrorInterceptor = this.http.onResponseError(error => {
			if (typeof this.auth.options.resetOnResponseError === 'function') {
				this.auth.options.resetOnResponseError(error, this.auth, this.scheme)
			} else if (this.auth.options.resetOnResponseError && error?.response?.status === 401) {
				this.scheme.reset?.()
				throw new ExpiredAuthSessionError()
			}
		})
	}

	#getAuthEndpoints() {
		const authEndpoints = Object.values(this.scheme.options.endpoints).map((endpoint) => {
			return typeof endpoint === 'object' ? endpoint.url as string : endpoint as string
		})

		return new Set(authEndpoints)
	}

	#isAuthEndpoint(config: FetchConfig) {
		return this.authEndpoints.has(config.url)
	}

	#getUpdatedRequestConfig(config: FetchConfig, token: string | boolean) {
		if (typeof token === 'string') {
			// @ts-ignore
			config.headers[this.#getHeadersTokenKey()] = token
		}
		return config
	}

	#removeRequestConfigHeadersToken(config: FetchConfig) {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
		delete config.headers[this.#getHeadersTokenKey()]

		return config
	}

	#requestHasAuthorizationHeader(config: FetchConfig) {
		// @ts-ignore
		return !!config.headers[this.#getHeadersTokenKey()]
	}

	#getHeadersTokenKey() {
		return this.scheme.options.token!.name
	}
}
