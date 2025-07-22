export enum ProfileStepKeyEnum {
	DATA = 'data',
	PHONE = 'phone',
}

export const profileSteps = [
	{
		key: ProfileStepKeyEnum.DATA,
		label: 'Заполнение данных',
	},
	{
		key: ProfileStepKeyEnum.PHONE,
		label: 'Подтверждение телефона',
	},
] as const
