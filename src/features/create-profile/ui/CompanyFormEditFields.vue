<script setup lang="ts">
import { labelAgreement, labelMyPhone } from '../model/checkboxLabels'
import { ProfileStepKeyEnum } from '../model/profileSteps'
import type { FullCompanyProfileForm } from '../model/use-company-profile-form'
import CheckBoxConsultation from './CheckBoxConsultation.vue'
import { CompanyProfileFields } from '~/src/shared/api/company/constants'
import BaseInput from '~/src/shared/ui/input/BaseInput.vue'
import AppPhoneInput from '~/src/shared/ui/input/AppPhoneInput.vue'
import BaseCheckbox from '~/src/shared/ui/BaseCheckbox.vue'

const props = defineProps<{
	activeStep: ProfileStepKeyEnum
	isShowTimer: boolean
}>()

const state = defineModel<FullCompanyProfileForm>({ required: true })
const isPhoneStep = computed(() => props.activeStep === ProfileStepKeyEnum.PHONE)
watch(() => state.value.inn, () => {
	state.value.kpp = state.value.inn.length === 10 ? '0' : state.value.inn.length < 12 ? '' : state.value.kpp
})
</script>

<template>
	<div class="flex flex-col gap-2">
		<UFormField
			v-if="!state.inn || (state.inn && state.inn.length !== 10 && state.inn.length !== 12)"
			label="ИНН"
			:name="CompanyProfileFields.inn"
		>
			<BaseInput
				v-model="state.inn"
				:only-digits="true"
				:max-length="12"
				:disabled="isPhoneStep"
			/>
			<span class="block mt-2 text-[#bcbcbc] text-[13px] font-medium">
				Введите ИНН полностью и выберите компанию из списка
			</span>
		</UFormField>
		<div
			v-else
			class="flex flex-col gap-6"
		>
			<UFormField
				label="Название организации или ИП"
				:name="CompanyProfileFields.companyName"
			>
				<BaseInput
					v-model="state.companyName"
					:disabled="isPhoneStep"
				/>
			</UFormField>
			<div
				v-if="state.inn"
				class="flex grid-cols-2 gap-4"
			>
				<UFormField
					label="ИНН"
					:name="CompanyProfileFields.inn"
					class="w-[192px]"
				>
					<BaseInput
						v-model="state.inn"
						:only-digits="true"
						:max-length="12"
						:disabled="isPhoneStep"
					/>
				</UFormField>
				<UFormField
					v-if="state.inn.length === 12"
					label="КПП"
					:name="CompanyProfileFields.kpp"
					class="w-[192px]"
				>
					<BaseInput
						v-model="state.kpp"
						:only-digits="true"
						:max-length="9"
						:disabled="isPhoneStep"
					/>
				</UFormField>
			</div>
			<UFormField
				label="Юридический адрес"
				:name="CompanyProfileFields.address"
			>
				<UTextarea
					v-model="state.address"
					:disabled="isPhoneStep"
					:rows="1"
					autoresize
					:ui="{
						root: 'w-full rounded-xl bg-[#f1f1f1]',
						base: 'min-h-[49px] p-3 bg-transparent rounded-xl resize-none ring-0',
					}"
				/>
			</UFormField>
			<UFormField
				:label="state.inn.length === 12 ? 'ОГРН' : 'ОГРНИП'"
				:name="CompanyProfileFields.ogrn"
			>
				<BaseInput
					v-model="state.ogrn"
					:only-digits="true"
					:max-length="state.inn.length === 12 ? 13 : 15"
					:disabled="isPhoneStep"
				/>
			</UFormField>
			<UFormField
				v-if="isPhoneStep"
				label="Мобильный телефон"
				:name="CompanyProfileFields.phone"
			>
				<AppPhoneInput
					v-model="state.phone"
					:disabled="isShowTimer"
					use-base-phone-input-ui
				/>
			</UFormField>
			<UFormField
				v-if="!isPhoneStep"
				:name="CompanyProfileFields.agreement"
			>
				<BaseCheckbox
					v-model="state.agreement"
					:label="labelAgreement"
				/>
			</UFormField>
		</div>
		<UFormField
			v-if="isPhoneStep && !isShowTimer"
			:name="CompanyProfileFields.isMyPhone"
		>
			<BaseCheckbox
				v-model="state.isMyPhone"
				:label="labelMyPhone"
			/>
		</UFormField>
		<UFormField
			v-if="isPhoneStep && !isShowTimer"
			:name="CompanyProfileFields.isConsult"
		>
			<CheckBoxConsultation v-model="state.isConsult" />
		</UFormField>
	</div>
</template>
