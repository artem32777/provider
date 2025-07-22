import { zodValidators } from '~/src/shared/lib/form/validation/zod'
import { TicketFields } from '~/src/shared/api/ticket/constants'
import { mockRequest } from '~/src/shared/lib/mock/mock-request'
import { TicketTypesKeyEnum } from '~/src/features/create-ticket/model/ticketTypes'
import { z } from 'zod'

export const useCreateTicketForm = () => {
	const schema = z.object({
		[TicketFields.type]: zodValidators.required(),
		[TicketFields.message]: zodValidators.required(),
		[TicketFields.file]: z
			.instanceof(File)
			.optional()
			.nullable()
			.default(null),
	})

	const state = reactive<z.infer<typeof schema>>({
		[TicketFields.type]: TicketTypesKeyEnum.QUESTION,
		[TicketFields.message]: '',
		[TicketFields.file]: null,
	})

	const submit = async () => {
		await mockRequest()
	}

	return {
		schema,
		state,
		submit,
	}
}
