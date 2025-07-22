<script setup lang="ts">
import AuthFormOauth from '../../../features/auth/ui/AuthFormOauth.vue'
import { AuthFormWrapper, useRegisterForm } from '~/src/features/auth'
import { SITEMAP } from '~/src/shared/router/sitemap'
import { AuthFields } from '~/src/shared/api/v1/auth/constants'
import InputPassword from '~/src/shared/ui/input/InputPassword.vue'
import { useTryCatchWithLoading } from '~/src/shared/lib/composables/use-try-catch-with-loading'
import AppButton from '~/src/shared/ui/AppButton.vue'

const { formRef, schema, state, submit } = useRegisterForm()

const { isLoading, runWithLoading } = useTryCatchWithLoading(submit)
</script>

<template>
	<AuthFormWrapper title="Регистрация">
		<template #form>
			<UForm
				ref="formRef"
				:schema
				:state
				@submit="runWithLoading"
			>
				<div class="grid max-w-[328px] sm:mx-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
					<UFormField :name="AuthFields.email">
						<UInput
							v-model="state[AuthFields.email]"
							variant="soft"
							placeholder="Email"
							role="presentation"
						/>
					</UFormField>
					<UFormField :name="AuthFields.password">
						<InputPassword v-model="state[AuthFields.password]" />
					</UFormField>
					<UFormField
						v-show="state[AuthFields.password]"
						:name="AuthFields.confirmPassword"
					>
						<InputPassword
							v-model="state[AuthFields.confirmPassword]"
							placeholder="Подтвердите пароль"
						/>
					</UFormField>
				</div>
				<AuthFormOauth class="mb-8" />
				<AppButton
					:loading="isLoading"
					class="max-w-[328px]"
					type="submit"
					label="ЗАРЕГИСТРИРОВАТЬСЯ"
					block
				/>
			</UForm>
			<p class="text-center mt-6">
				Уже есть аккаунт?
				<UButton
					variant="link"
					label="Авторизуйтесь"
					:to="SITEMAP.login.route"
				/>
			</p>
		</template>
	</AuthFormWrapper>
</template>
