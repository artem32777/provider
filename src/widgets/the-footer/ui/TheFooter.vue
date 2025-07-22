<script setup lang="ts">
import TheFooterLogo from './TheFooterLogo.vue'
import TheFooterNavMenu from './TheFooterNavMenu.vue'
import TheFooterChatIcon from './TheFooterChatIcon.vue'
import TheFooterSubNavMenu from './TheFooterSubNavMenu.vue'
import TheFooterTextUsBanner from './TheFooterTextUsBanner.vue'
import TheFooterCallUsBanner from './TheFooterCallUsBanner.vue'
import { LandingSectionsIds } from '~/src/widgets/the-header/constants/landing-sections-ids'
</script>

<template>
	<footer
		:id="LandingSectionsIds.contacts"
		class="bg-(--black-900) text-white pb-20 md:pb-7 px-0"
	>
		<UContainer class="relative">
			<div class="flex flex-col gap-[36px] lg:gap-[56px] py-[40px] lg:py-[120px]">
				<TheFooterTextUsBanner />

				<TheFooterCallUsBanner />
			</div>

			<section class="flex flex-col xl:flex-row w-full gap-2 mt-7 md:mt-12.5 mb-8 xl:mb-30 px-3 md:px-0 xl:mt-[42px]">
				<TheFooterLogo />
				<TheFooterNavMenu />
			</section>
			<section class="flex flex-col xl:flex-row gap-5 xl:gap-2 px-3 md:px-0 xl:pl-1 items-start xl:items-center text-(--black-700)">
				<div class="w-auto order-2 xl:order-1  xl:min-w-[308px] font-semibold">
					Все права защищены, 2025
				</div>
				<TheFooterSubNavMenu class="order-1 xl:order-2" />
			</section>
			<TheFooterChatIcon />
		</UContainer>
	</footer>
</template>
