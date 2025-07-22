<script setup lang="ts">
import { formatPriceByOption } from '../lib/format-price-by-option'
import type { OfferItem, PricingOption } from '../model/types'

const props = defineProps<{
	offers: OfferItem[]
	activePriceOption?: PricingOption['key']
}>()

const formatPrice = (price: number) => {
	if (props.activePriceOption) {
		return formatPriceByOption(price, props.activePriceOption)
	}

	return formatPriceByOption(price)
}
</script>

<template>
	<ul class="flex flex-col md:grid md:grid-cols-2 gap-5">
		<li
			v-for="offer in offers"
			:key="offer.id"
			class="flex flex-col gap-5 rounded-[28px] ring ring-[#E9EDF5] p-5"
		>
			<header>
				<h3 class="text-base font-bold leading-[22px]">
					{{ offer.task }}
				</h3>
			</header>

			<div class="flex justify-between text-base text-(--black-800)">
				<span class="inline-flex flex-col break-words text-wrap gap-1 leading-[22px]">
					<span>{{ offer.cpu }}</span>
					<span>{{ offer.core }}</span>
				</span>
				<span class="inline-flex flex-col text-end items-end text-balance gap-1 leading-[22px]">
					<span>{{ offer.ram }}</span>
					<span>{{ offer.storage }}</span>
				</span>
			</div>

			<div class="flex flex-col gap-1 text-base text-(--black-800)">
				<span class="inline-flex justify-between gap-1 leading-[22px]">
					<span class="text-sm">Цена конкурентов</span>
					<span>от {{ formatPrice(offer.othersPrice) }}</span>
				</span>
				<span class="inline-flex justify-between gap-1 leading-[22px]">
					<span class="text-sm">Наша цена</span>
					<span class="font-bold">{{ formatPrice(offer.ourPrice) }}</span>
				</span>
			</div>

			<UButton
				label="Заказать"
				block
				class="rounded-full px-5 py-2.5 text-base text-(--black-900) uppercase font-[500] bg-[#E9EDF5] active:bg-[#193294] active:text-white hover:bg-(--blue) hover:text-white"
			/>
		</li>
	</ul>
</template>
