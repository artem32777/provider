<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import OffersTabContent from './OffersTabContent.vue'

const items: TabsItem[] = [
	{
		label: 'VDS',
		content: 'This is the account content.',
	},
	{
		label: 'VPS',
		content: 'This is the password content.',
	},
]
</script>

<template>
	<UTabs
		variant="link"
		:items="items"
		:ui="{
			label: 'text-2xl lg:text-[32px] lg:desktop-h4 font-bold',
			trigger: 'grow items-center py-2 pb-[10px] lg:pb-[15px] leading-[26px] max-w-[200px] data-[state=active]:text-black',
			list: 'border-none p-0 lg:pl-4 lg:pr-[28px]',
		}"
		class="w-full gap-[36px] lg:gap-[56px]"
	>
		<template #content>
			<OffersTabContent />
		</template>
	</UTabs>
</template>
