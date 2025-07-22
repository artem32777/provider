<script setup lang="ts">
import AuthFormOauth from '../../../features/auth/ui/AuthFormOauth.vue'
import InputPassword from '~/src/shared/ui/input/InputPassword.vue'
import { AuthFormWrapper, useLoginForm } from '~/src/features/auth'
import { AuthFields } from '~/src/shared/api/v1/auth/constants'
import { SITEMAP } from '~/src/shared/router/sitemap'
import { useTryCatchWithLoading } from '~/src/shared/lib/composables/use-try-catch-with-loading'
import AppButton from '~/src/shared/ui/AppButton.vue'

const { schema, state, submit } = useLoginForm()

const { isLoading, runWithLoading } = useTryCatchWithLoading(submit)
</script>

<template>
	<AuthFormWrapper title="Вход в Личный кабинет">
		<template #form>
			<UForm
				:schema
				:state
				@submit="runWithLoading"
			>
				<div class="grid max-w-[328px] sm:mx-1 gap-4 sm:gap-6 mb-6 sm:mb-7.5">
					<UFormField :name="AuthFields.email">
						<UInput
							v-model="state[AuthFields.email]"
							variant="soft"
							placeholder="Email"
						/>
					</UFormField>
					<UFormField :name="AuthFields.password">
						<InputPassword v-model="state[AuthFields.password]" />
					</UFormField>
				</div>
				<AuthFormOauth class="mb-8" />
				<AppButton
					:loading="isLoading"
					class="max-w-[328px]"
					type="submit"
					label="ВОЙТИ"
					block
				/>
			</UForm>
			<p class="text-center my-5.5">
				Нет аккаунта?
				<UButton
					variant="link"
					label="Зарегистрируйтесь"
					:to="SITEMAP.register.route"
				/>
			</p>
			<UButton
				variant="link"
				:to="SITEMAP.passwordRecovery.route"
				block
				label="Забыли пароль?"
				class="text-center"
			/>
		</template>
	</AuthFormWrapper>
</template>
