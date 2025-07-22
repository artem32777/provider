<script setup lang="ts">
import { z } from 'zod'
import { mockRequest } from '~/src/shared/lib/mock/mock-request'
import { useTryCatchWithLoading } from '~/src/shared/lib/composables/use-try-catch-with-loading'
import AppButton from '~/src/shared/ui/AppButton.vue'
import AppPhoneInput from '~/src/shared/ui/input/AppPhoneInput.vue'
import { SITEMAP } from '~/src/shared/router/sitemap'
import { zodValidators } from '~/src/shared/lib/form/validation/zod'

const emit = defineEmits(['success'])

const schema = z.object({
	phone: zodValidators.phoneRequired(),
})

const formData = reactive({
	phone: '',
})

async function getCallBack() {
	await mockRequest()
	emit('success')
}

const {
	isLoading,
	runWithLoading,
} = useTryCatchWithLoading(getCallBack)
</script>

<template>
	<UForm
		class="pt-8 pb-4 sm:pb-0"
		:state="formData"
		:schema="schema"
		@submit="runWithLoading"
	>
		<UFormField
			class="mb-8"
			name="phone"
		>
			<AppPhoneInput
				v-model="formData.phone"
			/>
		</UFormField>

		<AppButton
			class="w-full mb-6"
			type="submit"
			block
			:disabled="isLoading"
		>
			Перезвоните мне
		</AppButton>

		<p class="text-(--color-black-700) text-center mobile-body-m">
			Нажимая, даю согласие на
			<NuxtLink
				class="link-primary link-reset inline"
				:to="SITEMAP.privacy.route"
			>
				обработку персональных данных
			</NuxtLink>
		</p>
	</UForm>
</template>
