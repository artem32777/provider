<script setup lang="ts">
import UiImage from '~/src/shared/ui/UiImage.vue'

const tariffDetails: { title: string, description: string, icon: string }[] = [
	{
		title: 'Облачное хранилище',
		description: 'Каждый сервер включает высокоскоростное облачное хранилище с доступом через сеть 10 Гбит, что позволяет быстро и эффективно работать с данными',
		icon: 'img/tariff-details/tariff-details-1.svg',
	},
	{
		title: 'Локальная сеть 10 Гбит',
		description: 'Объединяйте все свои серверы в единую инфраструктуру с помощью локальной сети 10 Гбит, расширяя её по мере роста вашего бизнеса',
		icon: 'img/tariff-details/tariff-details-2.svg',
	},
	{
		title: 'Гибкая настройка',
		description: 'Адаптация серверов под любые требования — оптимальная мощность и производительность, чтобы вы могли сосредоточиться на развитии, а не на технических нюансах',
		icon: 'img/tariff-details/tariff-details-3.svg',
	},
	{
		title: 'Надёжные компоненты',
		description: 'Все серверы оснащены RAID-массивом, ECC-памятью и серверными NVMe-накопителями для максимальной надёжности и быстродействия',
		icon: 'img/tariff-details/tariff-details-4.svg',
	},
]
</script>

<template>
	<UContainer as="section">
		<div class="flex flex-col gap-9 lg:gap-14 rounded-[40px] px-6 lg:px-15 py-9 lg:py-15 bg-white ">
			<h2 class="mobile-h2 lg:desktop-h2">
				включено в&nbsp;каждый тариф
			</h2>

			<ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-9 lg:gap-y-14 xl:pr-[14px]">
				<li
					v-for="tariffDetail in tariffDetails"
					:key="tariffDetail.title"
				>
					<UiImage
						:src="tariffDetail.icon"
						class="max-h-14 inline-flex mb-4 lg:mb-6"
					/>

					<h3 class="mobile-h5 lg:desktop-h5 mb-3 lg:mb-4">
						{{ tariffDetail.title }}
					</h3>

					<p class="lg:text-xl leading-[22px] lg:leading-[28px] lg:max-w-[557px]">
						{{ tariffDetail.description }}
					</p>
				</li>
			</ul>
		</div>
	</UContainer>
</template>
