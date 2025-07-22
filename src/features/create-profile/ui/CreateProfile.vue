<script setup lang="ts">
import type { ProfileFormType } from '../model/profileFormType'
import { usePersonProfileForm } from '../model/use-person-profile-form'
import { useCompanyProfileForm } from '../model/use-company-profile-form'
import { profileTypes, ProfileTypesKeyEnum } from '../model/profileTypes'
import { ProfileStepKeyEnum } from '../model/profileSteps'
import Steps from './Steps.vue'
import ProfileFormWrapper from './ProfileFormWrapper.vue'
import PersonFormEditFields from './PersonFormEditFields.vue'
import CompanyFormEditFields from './CompanyFormEditFields.vue'

const personProfile = usePersonProfileForm()
const companyProfile = useCompanyProfileForm()
const profileType = ref(profileTypes[0].value)

const buttonText = (profile: ProfileFormType, inn = '') => {
	return (profile.isShowTimer.value && profile.secondsLeft.value > 0) || (profileType.value === 'company' && inn.length !== 10 && inn.length !== 12)
		? ''
		: profile.activeStep.value === ProfileStepKeyEnum.PHONE
			? 'Получить код'
			: 'Сохранить и продолжить'
}
</script>

<template>
	<div>
		<Steps
			class="mb-12"
			:active-key="profileType===ProfileTypesKeyEnum.PERSON ? personProfile.activeStep.value : companyProfile.activeStep.value"
		/>

		<div class="w-full flex flex-col lg:p-[20px] rounded-2xl bg-white">
			<UFormField
				label="Тип аккаунта"
			>
				<USelect
					v-model="profileType"
					variant="none"
					size="xl"
					:items="profileTypes"
					class=" "
					:ui="{
						base: 'h-[49px] w-[400px] pl-4 bg-[#f1f1f1] text-black rounded-xl transition-colors hover:bg-gray-100',
						trailingIcon: 'w-4 h-4',
					}"
				/>
			</UFormField>

			<div
				class="h-px bg-[#b2b2b2] w-[400px] my-[22px]"
			/>

			<ProfileFormWrapper
				v-if="profileType === ProfileTypesKeyEnum.PERSON"
				:schema="personProfile.schema.value"
				:state="personProfile.state"
				:submit="personProfile.submit"
				:profile="personProfile"
				:button-text="buttonText(personProfile)"
			>
				<template #fields>
					<PersonFormEditFields
						v-model="personProfile.state"
						:active-step="personProfile.activeStep.value"
						:is-show-timer="personProfile.isShowTimer.value"
					/>
				</template>
			</ProfileFormWrapper>

			<ProfileFormWrapper
				v-if="profileType === 'company'"
				:schema="companyProfile.schema.value"
				:state="companyProfile.state"
				:submit="companyProfile.submit"
				:profile="companyProfile"
				:button-text="buttonText(companyProfile, companyProfile.state.inn)"
			>
				<template #fields>
					<CompanyFormEditFields
						v-model="companyProfile.state"
						:active-step="companyProfile.activeStep.value"
						:is-show-timer="companyProfile.isShowTimer.value"
					/>
				</template>
			</ProfileFormWrapper>
		</div>
	</div>
</template>
