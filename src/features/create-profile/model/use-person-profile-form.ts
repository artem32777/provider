import { z } from 'zod'
import { useResendTimer } from './use-resend-timer'
import { ProfileStepKeyEnum } from './profileSteps'
import { zodValidators } from '~/src/shared/lib/form/validation/zod'
import { PersonProfileFields } from '~/src/shared/api/user/constants'

const personProfileSchema = z.object({
	[PersonProfileFields.surName]: zodValidators.required(),
	[PersonProfileFields.firstName]: zodValidators.required(),
	[PersonProfileFields.secondName]: z.string().optional().default(''),
	[PersonProfileFields.agreement]: zodValidators.booleanRequired(),
})
export type BasePersonProfileForm = z.infer<typeof personProfileSchema>

export type FullPersonProfileForm = BasePersonProfileForm & {
	[PersonProfileFields.phone]?: string
	[PersonProfileFields.isMyPhone]: boolean
	[PersonProfileFields.isConsult]: boolean
}
export const usePersonProfileForm = () => {
	const { start, secondsLeft } = useResendTimer()
	const activeStep = ref<ProfileStepKeyEnum>(ProfileStepKeyEnum.DATA)
	const isShowTimer = ref<boolean>(false)
	const isShowCode = ref<boolean>(false)
	const schema = computed(() => {
		if (activeStep.value === ProfileStepKeyEnum.PHONE) {
			return personProfileSchema.extend({
				[PersonProfileFields.phone]: zodValidators.phoneRequired(),
				[PersonProfileFields.isMyPhone]: z.boolean().optional(),
				[PersonProfileFields.isConsult]: z.boolean().optional(),
			})
		}
		return personProfileSchema
	})

	const state = reactive<FullPersonProfileForm>({
		[PersonProfileFields.surName]: '',
		[PersonProfileFields.firstName]: '',
		[PersonProfileFields.secondName]: '',
		[PersonProfileFields.agreement]: false,
		[PersonProfileFields.phone]: '',
		[PersonProfileFields.isConsult]: false,
		[PersonProfileFields.isMyPhone]: false,
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
