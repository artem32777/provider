<script setup lang="ts">
import TheHeaderMenu from './TheHeaderMenu.vue'
import TheHeaderHamburger from './TheHeaderHamburger.vue'
import TheHeaderHamburgerTrigger from './TheHeaderHamburgerTrigger.vue'
import { useHideOnScroll } from '~/src/shared/lib/use-hide-on-scroll'
import AppLogo from '~/src/shared/ui/logo/AppLogo.vue'
import { LandingSectionsIds } from '~/src/widgets/the-header/constants/landing-sections-ids'

const isMobileMenuOpen = ref(false)

const { isVisible } = useHideOnScroll()
</script>

<template>
	<header
		class="bg-white fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
		:class="{
			'transform -translate-y-full': !isVisible,
			'transform translate-y-0': isVisible,
		}"
	>
		<UContainer class="flex gap-1 items-center justify-between">
			<NuxtLink
				:to="`#${LandingSectionsIds.hero}`"
				class="px-1 py-2 xl:py-4 mx-0 xl:mx-5"
			>
				<AppLogo />
			</NuxtLink>
			<TheHeaderMenu class="hidden xl:flex" />
			<TheHeaderHamburgerTrigger v-model="isMobileMenuOpen" />
		</UContainer>
	</header>
	<TheHeaderHamburger v-model="isMobileMenuOpen" />
</template>
