<script setup lang="ts">
import { SITEMAP } from '~/src/shared/router/sitemap'
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

const items: NavigationMenuItem[] = [
	{
		label: 'Политика обработки данных',
		to: SITEMAP.privacy.route,

	},
	{
		label: 'Документация',
		to: SITEMAP.docs.route,
	},
	{
		label: 'Реквизиты и лицензии',
		to: SITEMAP.requisites.route,
	},
]
</script>

<template>
	<UNavigationMenu
		:items="items"
		:ui="{
			list: 'flex items-start flex-col lg:flex-row gap-3.5 lg:gap-16',
			item: 'w-auto md:w-[260px]',
			link: 'inline w-auto text-md px-0 xl:px-2.5 hover:before:bg-transparent hover:text-white',
		}"
	/>
</template>
