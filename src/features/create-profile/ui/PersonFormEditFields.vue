<script setup lang="ts">
import type { FullPersonProfileForm } from '../model/use-person-profile-form'
import { labelAgreement, labelMyPhone } from '../model/checkboxLabels'
import { ProfileStepKeyEnum } from '../model/profileSteps'
import CheckBoxConsultation from './CheckBoxConsultation.vue'
import { PersonProfileFields } from '~/src/shared/api/user/constants'
import BaseInput from '~/src/shared/ui/input/BaseInput.vue'
import AppPhoneInput from '~/src/shared/ui/input/AppPhoneInput.vue'
import BaseCheckbox from '~/src/shared/ui/BaseCheckbox.vue'

const props = defineProps<{
	activeStep: ProfileStepKeyEnum
	isShowTimer: boolean
}>()

const state = defineModel<FullPersonProfileForm>({ required: true })
const isPhoneStep = computed(() => props.activeStep === ProfileStepKeyEnum.PHONE)
</script>

<template>
	<div class="flex flex-col gap-[23px]">
		<UFormField
			label="Фамилия"
			:name="PersonProfileFields.surName"
		>
			<BaseInput
				v-model="state.surName"
				:disabled="isPhoneStep"
			/>
		</UFormField>
		<UFormField
			label="Имя"
			:name="PersonProfileFields.firstName"
		>
			<BaseInput
				v-model="state.firstName"
				:disabled="isPhoneStep"
			/>
		</UFormField>
		<UFormField
			label="Отчество"
			:name="PersonProfileFields.secondName"
		>
			<BaseInput
				v-model="state.secondName"
				:disabled="isPhoneStep"
			/>
			<span class="block mt-2 text-[#bcbcbc] text-[13px] font-medium">
				Необязательно
			</span>
		</UFormField>
		<UFormField
			v-if="isPhoneStep"
			label="Мобильный телефон"
			:name="PersonProfileFields.phone"
		>
			<AppPhoneInput
				v-model="state.phone"
				:disabled="isShowTimer"
				use-base-phone-input-ui
			/>
		</UFormField>
		<UFormField
			v-if="!isPhoneStep"
			:name="PersonProfileFields.agreement"
		>
			<BaseCheckbox
				v-model="state.agreement"
				:label="labelAgreement"
			/>
		</UFormField>
		<UFormField
			v-if="isPhoneStep && !isShowTimer"
			:name="PersonProfileFields.isMyPhone"
		>
			<BaseCheckbox
				v-model="state.isMyPhone"
				:label="labelMyPhone"
			/>
		</UFormField>
		<UFormField
			v-if="isPhoneStep && !isShowTimer"
			:name="PersonProfileFields.isConsult"
		>
			<CheckBoxConsultation v-model="state.isConsult" />
		</UFormField>
	</div>
</template>
