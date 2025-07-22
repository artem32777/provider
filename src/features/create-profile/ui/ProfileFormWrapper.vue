<script setup lang="ts">
import type { ZodSchema } from 'zod'
import type { ProfileFormType } from '../model/profileFormType'
import { useTryCatchWithLoading } from '~/src/shared/lib/composables/use-try-catch-with-loading'
import BaseInput from '~/src/shared/ui/input/BaseInput.vue'
import { secondsToString } from '~/src/shared/lib/format/secondsToString'

const { submit, profile } = defineProps<{
	schema: ZodSchema
	state: Record<string, unknown>
	submit: () => Promise<void>
	profile: ProfileFormType
	buttonText: string
}>()

const { isLoading, runWithLoading } = useTryCatchWithLoading(submit)

const code = ref('')
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="max-w-[400px]"
		@submit.prevent="runWithLoading"
	>
		<slot name="fields" />
		<slot name="timer">
			<UFormField
				v-if="profile.isShowCode.value"
				label="Код из СМС"
				class="mt-6"
			>
				<BaseInput
					v-model="code"
				/>
				<span
					v-if="profile.isShowTimer.value && +profile.secondsLeft.value > 0"
					class="block mt-2 text-[#bcbcbc] text-[13px] font-medium"
				>
					Запросить новый код можно через {{ secondsToString(+profile.secondsLeft.value) }}
				</span>
			</UFormField>
		</slot>
		<slot
			name="actions"
			:is-loading="isLoading"
		>
			<UButton
				v-if="buttonText"
				:loading="isLoading"
				type="submit"
				:label="buttonText"
				color="neutral"
				size="xl"
				class="py-3 px-[41px] mt-6 rounded-xl"
			/>
		</slot>
	</UForm>
</template>
