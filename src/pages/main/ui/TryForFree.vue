<script setup lang="ts">
import { AuthFormOauth, useRegisterForm } from '~/src/features/auth'
import AppButton from '~/src/shared/ui/AppButton.vue'
import { AuthFields } from '~/src/shared/api/v1/auth/constants'
import InputPassword from '~/src/shared/ui/input/InputPassword.vue'
import { useTryCatchWithLoading } from '~/src/shared/lib/composables/use-try-catch-with-loading'

const { formRef, schema, state, submit } = useRegisterForm()

const { isLoading, runWithLoading } = useTryCatchWithLoading(submit)
</script>

<template>
	<section class="bg-(--gray) py-10 lg:py-30 lg:pb-41">
		<UContainer>
			<h2 class="mobile-h1 lg:desktop-h1 mb-8 text-center">
				Попробуйте бесплатно
			</h2>
			<p class="lg:text-xl max-w-[600px] text-center m-auto mb-9 lg:mb-14 leading-[22px] lg:leading-[28px]">
				После регистрации вы&nbsp;получите 48&nbsp;часов доступа ко&nbsp;всем функциям платформы&nbsp;&mdash; абсолютно бесплатно
			</p>
			<UForm
				ref="formRef"
				:schema
				:state
				@submit="runWithLoading"
			>
				<div class="grid gap-4 lg:gap-6 max-w-[600px] mx-auto mb-6 lg:mb-8">
					<UFormField :name="AuthFields.email">
						<UInput
							v-model="state[AuthFields.email]"
							role="presentation"
							variant="soft"
							placeholder="Email"
						/>
					</UFormField>
					<UFormField :name="AuthFields.password">
						<InputPassword v-model="state[AuthFields.password]" />
					</UFormField>
					<UFormField
						v-show="state[AuthFields.password]"
						:name="AuthFields.confirmPassword"
					>
						<template #default="{ error }">
							<InputPassword
								v-model="state[AuthFields.confirmPassword]"
								placeholder="Подтвердите пароль"
								:ui="error ? { base: 'pe-15 !placeholder-(--blue)' } : {}"
							/>
						</template>
					</UFormField>
				</div>
				<div class="grid justify-items-center max-w-[400px] mx-auto">
					<AuthFormOauth class="mb-6 lg:mb-8" />
					<AppButton
						:loading="isLoading"
						type="submit"
						label="ЗАРЕГИСТРИРОВАТЬСЯ"
						block
					/>
				</div>
			</UForm>
		</UContainer>
	</section>
</template>
