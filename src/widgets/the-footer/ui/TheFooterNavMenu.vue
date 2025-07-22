<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'
import { LandingSectionsIds } from '~/src/widgets/the-header/@x/the-footer/index'

const items: NavigationMenuItem[][] = [
	[
		{
			label: 'Каталог серверов',
			to: LandingSectionsIds.catalog,
		},
		{
			label: 'Преимущества',
			to: LandingSectionsIds.advantages,
		},
		{
			label: 'О компании',
			to: LandingSectionsIds.about,
		},
		{
			label: 'FAQ',
			to: LandingSectionsIds.faq,
		},
	],
	[
		{
			label: 'Личный кабинет',
			to: '',
		},
		{
			label: 'Чат с поддержкой',
			to: '',
		},
		{
			label: 'Промо',
			to: '',
		},
	],
	[
		{
			label: '8 (800) 000 00 00',
			to: 'tel:88000000000',
		},
		{
			label: 'info@dataway.ru',
			to: 'mailto:info@dataway.ru',
		},
	],
]
</script>

<template>
	<div class="flex flex-col md:flex-row gap-3.5 md:gap-10 lg:gap-31">
		<UNavigationMenu
			v-for="(item, index) in items"
			:key="index"
			orientation="vertical"
			:items="[item]"
			:ui="{
				list: 'pt-1 w-auto md:w-[200px] inline-flex flex-col',
				item: 'self-start',
				link: 'py-[11px] px-1 text-md hover:before:bg-transparent hover:text-white',
			}"
		/>
	</div>
</template>
