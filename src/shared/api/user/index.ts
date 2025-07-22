import type { PersonProfileFields } from './constants'

export namespace userAPI {

	export namespace Edit {
		export type Body = {
			[PersonProfileFields.firstName]: string
			[PersonProfileFields.secondName]: string
			[PersonProfileFields.surName]: string
		}
	}
}

export const userAPI = {

	async edit() {
		return null
	},

} as const
