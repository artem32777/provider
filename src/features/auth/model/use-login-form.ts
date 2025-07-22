import { z } from 'zod'
import { zodValidators } from '~/src/shared/lib/form/validation/zod'
import { AuthFields } from '~/src/shared/api/v1/auth/constants'
import { authAPI } from '~/src/shared/api/v1/auth'
import { SITEMAP } from '~/src/shared/router/sitemap'

export const useLoginForm = () => {
	const schema = z.object({
		[AuthFields.email]: zodValidators.emailRequired(),
		[AuthFields.password]: zodValidators.passwordRequired(),
	})

	const state = reactive<z.infer<typeof schema>>({
		[AuthFields.email]: '',
		[AuthFields.password]: '',
	})

	const submit = async () => {
		const response = await authAPI.login({
			[AuthFields.email]: state[AuthFields.email],
			[AuthFields.password]: state[AuthFields.password],
		})
		await useAuth().setUserToken(response.data.accessToken, response.data.refreshToken)
		navigateTo(SITEMAP.personalArea.route)
	}

	return {
		schema,
		state,
		submit,
	}
}
