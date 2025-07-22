<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { OfferItem, PricingOption } from '../model/types'
import { formatPriceByOption } from '../lib/format-price-by-option'

const props = defineProps<{
	offers: OfferItem[]
	activePriceOption?: PricingOption['key']
}>()

const offerTableHeaders: TableColumn<OfferItem>[] = [
	{
		accessorKey: 'task',
		header: 'Задача',
	},
	{
		accessorKey: 'ourPrice',
		header: 'Наша цена',
	},
	{
		accessorKey: 'othersPrice',
		header: 'Цена конкурентов',
	},
	{
		accessorKey: 'cpu',
		header: 'Процессор',
	},
	{
		accessorKey: 'core',
		header: 'Ядра',
	},
	{
		accessorKey: 'ram',
		header: 'Память',
	},
	{
		accessorKey: 'storage',
		header: 'Хранилище',
	},
]

const formatPrice = (price: number) => {
	if (props.activePriceOption) {
		return formatPriceByOption(price, props.activePriceOption)
	}

	return formatPriceByOption(price)
}
</script>

<template>
	<div>
		<UTable
			:columns="offerTableHeaders"
			:data="offers"
			:ui="{
				thead: '[&>tr]:hover:bg-transparent [&>tr]:cursor-default [&>tr]:after:hidden',
				tr: 'group cursor-pointer hover:bg-[#E9EDF5] border-none last:[&>td]:pb-[16px] last:[&>td]:pt-[22px]',
				th: 'text-(--black-800) text-base font-normal p-0 py-3 pr-5 pb-[20px] first:pl-9 last:pr-0 xl:nth-[1]:min-w-[199px] nth-[2]:min-w-[105px] nth-[3]:min-w-[165px] last:min-w-[329px] text-wrap break-words',
				td: 'text-xl text-(--black-800) p-0 py-[16px] pr-4 min-h-[56px] first:pl-9 last:pr-7 first:rounded-tl-full first:rounded-bl-full last:rounded-tr-full last:rounded-br-full leading-[28px] pb-[20px] text-wrap break-words',
			}"
		>
			<template #task-cell="{ row }">
				<span class="font-bold">{{ row.original.task }}</span>
			</template>

			<template #ourPrice-cell="{ row }">
				<span class="font-bold min-w-[78px] inline-flex">{{ formatPrice(row.original.ourPrice) }}</span>
			</template>

			<template #othersPrice-cell="{ row }">
				<span>от {{ formatPrice(row.original.othersPrice) }}</span>
			</template>

			<template #storage-cell="{ row }">
				<div class="flex gap-[16px] items-center lg:justify-between">
					<span class="w-[153px] text-wrap">{{ row.original.storage }}</span>
					<UButton
						label="Заказать"
						class="self-end uppercase text-(--black-900) text-base py-2.5 px-5 bg-[#E9EDF5] rounded-full group-hover:bg-(--blue) group-hover:text-white hover:bg-(--blue) hover:text-white active:bg-(--blue-hover) active:text-white"
					/>
				</div>
			</template>
		</UTable>
	</div>
</template>
