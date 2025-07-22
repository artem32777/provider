import { z } from 'zod'
import { zodValidators } from '~/src/shared/lib/form/validation/zod'
import { AuthFields } from '~/src/shared/api/v1/auth/constants'
import { authAPI } from '~/src/shared/api/v1/auth'
import { SITEMAP } from '~/src/shared/router/sitemap'

const registerSchema = z.object({
	[AuthFields.email]: zodValidators.emailRequired(),
	[AuthFields.password]: zodValidators.passwordRequired(),
	[AuthFields.confirmPassword]: zodValidators.required('Повторите введённый пароль'),
}).refine(...zodValidators.getConfirmRefine())

export type RegisterForm = z.infer<typeof registerSchema>

export const useRegisterForm = () => {
	const formRef = ref()
	const schema = registerSchema

	const state = reactive<RegisterForm>({
		[AuthFields.email]: '',
		[AuthFields.password]: '',
		[AuthFields.confirmPassword]: '',
	})

	watch(() => state[AuthFields.password], () => {
		if (state[AuthFields.confirmPassword]) {
			formRef.value.validate()
		}
	})

	const submit = async () => {
		const response = await authAPI.register({
			[AuthFields.email]: state[AuthFields.email],
			[AuthFields.password]: state[AuthFields.password],
		})
		await useAuth().setUserToken(response.data.accessToken, response.data.refreshToken)
		navigateTo(SITEMAP.personalArea.route)
	}

	return {
		formRef,
		schema,
		state,
		submit,
	}
}
