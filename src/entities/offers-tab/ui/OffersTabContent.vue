<script setup lang="ts">
import { offers } from '../model/mock'
import OffersContentList from './OffersContentList.vue'
import OffersContentTable from './OffersContentTable.vue'
import OffersPricing from './OffersPricing.vue'
import AppButton from '~/src/shared/ui/AppButton.vue'

const activePriceOption = ref()
const isTooltipOpen = ref(false)
</script>

<template>
	<div class="flex flex-col gap-[36px] lg:gap-[56px]">
		<OffersPricing
			v-model="activePriceOption"
			class="lg:px-4"
		/>

		<OffersContentTable
			:active-price-option="activePriceOption"
			:offers="offers"
			class="hidden xl:block"
		/>

		<OffersContentList
			:offers="offers"
			:active-price-option="activePriceOption"
			class="xl:hidden"
		/>

		<UTooltip
			v-model:open="isTooltipOpen"
			:content="{
				align: 'start',
				side: 'bottom',
			}"
			:ui="{
				content: 'flex flex-col gap-4 max-w-[95vw] lg:max-w-[700px] w-full h-min ring-0 bg-white rounded-[16px] p-6',
			}"
			class="px-5"
		>
			<UButton
				variant="link"
				label="Рекомендации по выбору"
				class="self-start text-base text-(--black-900) lg:text-xl underline underline-offset-4 py-0 lg:pl-9"
				@click="isTooltipOpen = !isTooltipOpen"
			/>

			<template #content>
				<h3 class="self-start text-xl font-bold sm:hidden">
					Рекомендации по выбору
				</h3>

				<ul class="text-(--black-900) text-base lg:text-xl list-disc pl-4 flex flex-col gap-4">
					<li class="text-wrap max-w-full">
						если вам нужно до 8 ядер и 24 ГБ RAM — выбирайте VPS: это дешевле и быстрее по активации
					</li>
					<li>
						если задачи требуют больше ресурсов — лучше взять VDS, он будет выгоднее при высокой нагрузке
					</li>
					<li>
						для работы с быстрыми БД — выбирайте серверы с пометкой NVMe
					</li>
				</ul>
			</template>
		</UTooltip>

		<AppButton
			label="Смотреть все"
			block
			class="self-center uppercase max-w-[345px] lg:max-w-[326px] lg:-ml-3 w-full"
		/>

		<!-- overlay для тултипа на мобилках -->
		<div
			v-show="isTooltipOpen"
			class="offer-tab-overlay inset-0 fixed bottom-[-46px] sm:hidden bg-black/25 z-[1]"
		/>
	</div>
</template>
