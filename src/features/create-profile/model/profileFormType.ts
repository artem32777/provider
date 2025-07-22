import type { ZodSchema } from 'zod'
import type { ProfileStepKeyEnum } from './profileSteps'

export interface ProfileFormType {
	state: Record<string, unknown>
	submit: () => Promise<void>
	schema: Ref<ZodSchema>
	activeStep: Ref<ProfileStepKeyEnum>
	isShowCode: Ref<boolean>
	isShowTimer: Ref<boolean>
	secondsLeft: Ref<number>
}
