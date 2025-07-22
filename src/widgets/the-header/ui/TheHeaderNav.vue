<script setup lang="ts">
import { LandingSectionsIds } from '../constants/landing-sections-ids'
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

const items: NavigationMenuItem[] = [
	{
		label: 'КАТАЛОГ',
		to: `#${LandingSectionsIds.catalog}`,
	},
	{
		label: 'ПРЕИМУЩЕСТВА',
		to: `#${LandingSectionsIds.advantages}`,
	},
	{
		label: 'О КОМПАНИИ',
		to: `#${LandingSectionsIds.about}`,
	},
	{
		label: 'КОНТАКТЫ',
		to: `#${LandingSectionsIds.contacts}`,
	},
	{
		label: 'FAQ',
		to: `#${LandingSectionsIds.faq}`,
	},
]
</script>

<template>
	<UNavigationMenu
		:items="items"
		:ui="{
			list: 'gap-2 flex-col xl:flex-row',
			link: 'px-5 font-bold py-[13px] xl:py-2.5 text-md hover:before:bg-transparent',
			item: 'text-(--black-900) hover:text-(--black-800) active:text-(--black-700)',
		}"
	/>
</template>
