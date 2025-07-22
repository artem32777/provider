import type { CompanyProfileFields } from './constants'

export namespace companyAPI {

	export namespace Edit {
		export type Body = {
			[CompanyProfileFields.inn]: string
			[CompanyProfileFields.kpp]: string
			[CompanyProfileFields.companyName]: string
		}
	}
}

export const companyAPI = {

	async edit() {
		return null
	},

} as const
