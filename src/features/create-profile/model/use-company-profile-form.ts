import { z } from 'zod'
import { ProfileStepKeyEnum } from './profileSteps'
import { useResendTimer } from './use-resend-timer'
import { zodValidators } from '~/src/shared/lib/form/validation/zod'
import { CompanyProfileFields } from '~/src/shared/api/company/constants'
import type { PersonProfileFields } from '~/src/shared/api/user/constants'

const companyProfileSchema = z.object({
	[CompanyProfileFields.inn]: zodValidators
		.required()
		.refine(val => val.length === 10 || val.length === 12, {
			message: 'ИНН должен содержать для юридического лица 10 цифр или для ИП 12 цифр',
		}),
	[CompanyProfileFields.kpp]: zodValidators
		.required()
		.refine(val => val.length === 1 || val.length === 9, {
			message: 'КПП должен содержать 9 цифр',
		}),
	[CompanyProfileFields.ogrn]: zodValidators
		.required()
		.refine(val => val.length === 13 || val.length === 15, {
			message: 'ОГРН должен содержать 13 цифр или ОГРНИП должен содержать 15 цифр',
		}),
	[CompanyProfileFields.companyName]: zodValidators.required(),
	[CompanyProfileFields.address]: zodValidators.required(),
	[CompanyProfileFields.agreement]: zodValidators.booleanRequired(),
})

export type BaseCompanyProfileForm = z.infer<typeof companyProfileSchema>

export type FullCompanyProfileForm = BaseCompanyProfileForm & {
	[PersonProfileFields.phone]?: string
	[PersonProfileFields.isMyPhone]: boolean
	[PersonProfileFields.isConsult]: boolean
}
export const useCompanyProfileForm = () => {
	const { start, secondsLeft } = useResendTimer()
	const activeStep = ref<ProfileStepKeyEnum>(ProfileStepKeyEnum.DATA)
	const isShowTimer = ref<boolean>(false)
	const isShowCode = ref<boolean>(false)
	const schema = computed(() => {
		if (activeStep.value === ProfileStepKeyEnum.PHONE) {
			return companyProfileSchema.extend({
				[CompanyProfileFields.phone]: zodValidators.phoneRequired(),
				[CompanyProfileFields.isMyPhone]: z.boolean().optional(),
				[CompanyProfileFields.isConsult]: z.boolean().optional(),
			})
		}
		return companyProfileSchema
	})

	const state = reactive<FullCompanyProfileForm>({
		[CompanyProfileFields.inn]: '',
		[CompanyProfileFields.kpp]: '',
		[CompanyProfileFields.ogrn]: '',
		[CompanyProfileFields.companyName]: '',
		[CompanyProfileFields.address]: '',
		[CompanyProfileFields.agreement]: false,
		[CompanyProfileFields.phone]: '',
		[CompanyProfileFields.isConsult]: false,
		[CompanyProfileFields.isMyPhone]: false,
	})

	const submit = async () => {
		isShowTimer.value = false
		if (activeStep.value === ProfileStepKeyEnum.DATA) {
			goToStep(ProfileStepKeyEnum.PHONE)
		} else {
			isShowCode.value = true
			await nextTick()
			isShowTimer.value = true
		}
	}

	const goToStep = (step: ProfileStepKeyEnum) => {
		activeStep.value = step
	}

	watch(isShowTimer, (val) => {
		if (val) start()
	})

	return {
		schema,
		state,
		activeStep,
		isShowTimer,
		isShowCode,
		secondsLeft,
		goToStep,
		submit,
	}
}
