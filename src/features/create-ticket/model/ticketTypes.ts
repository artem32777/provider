export enum TicketTypesKeyEnum {
	QUESTION = 'question',
	PROBLEM = 'problem',
	COMPLAINT = 'complaint',
}
export const ticketTypes = [
	{
		value: TicketTypesKeyEnum.QUESTION,
		label: 'Вопрос',
	},
	{
		value: TicketTypesKeyEnum.PROBLEM,
		label: 'Проблема',
	},
	{
		value: TicketTypesKeyEnum.COMPLAINT,
		label: 'Жалоба',
	},
]
