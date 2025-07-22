import { useV1Api } from '../instance'
import type { AuthFields } from './constants'
import type { SuccessResponseV1 } from '~/src/shared/api/v1/types'

export namespace AuthAPI {

	export type Tokens = {
		accessToken: string
		refreshToken: string
	}

	export namespace Register {
		export type Body = {
			[AuthFields.email]: string
			[AuthFields.password]: string
		}
	}

	export namespace Login {
		export type Body = {
			[AuthFields.email]: string
			[AuthFields.password]: string
		}
	}

}

export const authAPI = {

	async register(body: AuthAPI.Register.Body) {
		return await useV1Api().$post<SuccessResponseV1<AuthAPI.Tokens>>('/auth/registration', { body })
	},

	async login(body: AuthAPI.Login.Body) {
		return await useV1Api().$post<SuccessResponseV1<AuthAPI.Tokens>>('/auth/login', { body })
	},

} as const
