<script setup lang="ts">
import { PRICING_TYPES } from '../model/types'
import type { PricingOption } from '../model/types'

const activePricingOption = defineModel<PricingOption['key']>({ default: 'month' })

const pricingOptions: PricingOption[] = Object.entries(PRICING_TYPES).map(([key, val]) => {
	return {
		key,
		value: `Цена в ${val}`,
	}
}) as PricingOption[]

const handlePricingBtnClick = (e: Event, key: PricingOption['key']) => {
	activePricingOption.value = key

	if (e.target) {
		const button = (e.target as HTMLElement).closest('button')

		if (button) {
			button.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' })
		}
	}
}

const isActive = (key: PricingOption['key']) => {
	return activePricingOption.value === key
}
</script>

<template>
	<div class="flex gap-x-5 gap-y-1 flex-wrap">
		<button
			v-for="pricingOption in pricingOptions"
			:key="pricingOption.key"
			class="text-xl font-bold p-1 hover:text-(--blue-hover)"
			:class="{ 'text-(--blue)': isActive(pricingOption.key) }"
			@click="(e: Event) => handlePricingBtnClick(e, pricingOption.key)"
		>
			{{ pricingOption.value }}
		</button>
	</div>
</template>
