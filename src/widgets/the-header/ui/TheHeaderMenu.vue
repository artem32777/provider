<script setup lang="ts">
import TheHeaderNav from './TheHeaderNav.vue'
import AppButton from '~/src/shared/ui/AppButton.vue'
import { SITEMAP } from '~/src/shared/router/sitemap'

defineProps<{ isMobileMenuOpen?: boolean }>()
</script>

<template>
	<div class="flex flex-col xl:flex-row justify-between grow items-center">
		<TheHeaderNav :class="{ 'pt-10 pb-14': isMobileMenuOpen }" />
		<div class="flex flex-col xl:flex-row gap-5 xl:gap-2.5 items-center">
			<AppButton
				variant="ghost"
				size="sm"
				label="ЛИЧНЫЙ КАБИНЕТ"
				:to="useAuth().loggedIn ? SITEMAP.personalArea.route : SITEMAP.login.route"
			/>
			<AppButton
				:size="isMobileMenuOpen ? 'lg' : 'sm'"
				label="РЕГИСТРАЦИЯ"
				class="xl:w-[159px]"
				block
				:to="SITEMAP.register.route"
			/>
		</div>
	</div>
</template>
