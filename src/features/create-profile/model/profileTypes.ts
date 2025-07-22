export enum ProfileTypesKeyEnum {
	PERSON = 'person',
	COMPANY = 'company',
}
export const profileTypes = [
	{
		value: ProfileTypesKeyEnum.PERSON,
		label: 'Физическое лицо',
	},
	{
		value: ProfileTypesKeyEnum.COMPANY,
		label: 'Юридическое лицо',
	},
]
