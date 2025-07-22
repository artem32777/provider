<script setup lang="ts">
import { ticketTypes } from '../model/ticketTypes'
import { useCreateTicketForm } from '../model/use-create-ticket-form'
import { useTryCatchWithLoading } from '~/src/shared/lib/composables/use-try-catch-with-loading'
import { TicketFields } from '~/src/shared/api/ticket/constants'
import { LocalIcons } from '~/src/shared/icons/local-icons'

const { schema, state, submit } = useCreateTicketForm()

const testFile = ref('')

const { isLoading, runWithLoading } = useTryCatchWithLoading(submit)
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="w-full flex flex-col"
		@submit.prevent="runWithLoading"
	>
		<UFormField
			:name="TicketFields.type"
		>
			<URadioGroup
				v-model="state.type"
				orientation="horizontal"
				variant="list"
				size="xl"
				:items="ticketTypes"
				:ui="{
					fieldset: 'gap-4',
					base: 'mr-1 w-6 h-6 ring-[#7E7E7E]',
					indicator: 'w-6 h-6 after:content-none bg-no-repeat bg-center bg-[url(/img/check.svg)]',
				}"
			/>
		</UFormField>
		<UFormField
			:name="TicketFields.message"
		>
			<UTextarea
				v-model="state.message"
				placeholder="Сообщение"
				size="xl"
				autoresize
				:ui="{
					root: 'w-full rounded-xl bg-white mt-8 mb-1',
					base: 'min-h-[250px] bg-white text-black ring-0 placeholder:text-gray-400 p-6 resize-none',
				}"
			/>
		</UFormField>
		<UFormField
			:name="TicketFields.file"
		>
			<UInput
				v-model="testFile"
				type="file"
				variant="none"
				:ui="{
					base: 'max-w-[200px] cursor-pointer file:hidden bg-transparent text-transparent',
					leading: 'pointer-events-none ps-0',
				}"
			>
				<template #leading>
					<UIcon
						:name="LocalIcons.clip"
						class="w-6 h-6 mr-[10px]"
					/>
					<span class="text-[16px]">
						{{ testFile ? testFile : 'Прикрепить файл' }}
					</span>
				</template>
			</UInput>
		</UFormField>
		<UButton
			:loading="isLoading"
			type="submit"
			label="Отправить"
			color="neutral"
			size="xl"
			class="max-w-[200px] mt-5 py-[12px] px-[55px] rounded-xl"
		/>
	</UForm>
</template>
