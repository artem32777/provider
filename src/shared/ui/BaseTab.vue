<script setup lang="ts">
import type { TabsItem, TabsProps } from '@nuxt/ui/runtime/components/Tabs.vue.d.ts'

const model = defineModel<string>()

type BaseTabsProps = TabsProps<TabsItem>

defineProps<Partial<BaseTabsProps>>()

const baseTabsUi: BaseTabsProps['ui'] = {
	label: 'mobile-h5 [letter-spacing:-0.5px] [line-height:1.2]',
	trigger: 'px-0 pb-4 pt-0 mr-6 data-[state=inactive]:text-[#CCCDCE]',
	indicator: 'bg-black h-1',
	list: 'text-black p-0',
}
</script>

<template>
	<UTabs
		v-model="model"
		:items="items"
		variant="link"
		:ui="{ ...baseTabsUi, ...ui }"
	/>
</template>
