<script setup lang="ts">
import UiImage from '~/src/shared/ui/UiImage.vue'

interface EnvironmentOffer {
	id: number
	title: string
	titleColor: string
	bgColor: string
	bgImage: string
	description: string
}

const environmentOffers: EnvironmentOffer[] = [
	{
		id: 1,
		title: 'Серверные платформы',
		titleColor: '#fff',
		bgColor: '#1D4AF0',
		bgImage: 'img/environment-offers/environment-offers-1.webp',
		description: `
			<ul class="inline-flex flex-col gap-3.5 lg:gap-3 pl-5 lg:pl-4.5 text-base lg:text-xl list-disc text-[#D3D7E0]">
				<li>
					Huawei 1288 V5
				</li>
				<li>
					Supermicro
				</li>
				<li>
					HP BL160c
				</li>
			</ul>
		`,
	},
	{
		id: 2,
		title: 'Сетевые подключения',
		titleColor: '#161718',
		bgColor: '#CCD4E3',
		bgImage: 'img/environment-offers/environment-offers-2.webp',
		description: `
			<ul class="inline-flex flex-col gap-3.5 lg:gap-3 pl-5 lg:pl-4.5 text-base lg:text-xl list-disc text-[#3D3E40]">
				<li>
					локальная сеть 10&nbspGbit/s
				</li>
				<li>
					1 Gbit/s shared port
				</li>
				<li>
					доступ к хранилищу через выделенный интерфейс
				</li>
			</ul>
		`,
	},
	{
		id: 3,
		title: 'Дата-центр Tier III',
		titleColor: '#fff',
		bgColor: '#223143',
		bgImage: 'img/environment-offers/environment-offers-3.webp',
		description: `
			<ul class="inline-flex flex-col gap-3.5 lg:gap-3 pl-5 lg:pl-4.5 text-base lg:text-xl list-disc text-[#D3D7E0]">
				<li>
					резервирование электропитания и&nbspохлаждения
				</li>
				<li>
					аптайм: SLA 99,98%
				</li>
			</ul>
		`,
	},
]
</script>

<template>
	<UContainer
		as="section"
		class="lg:py-[60px]"
	>
		<h2 class="mobile-h2 lg:desktop-h2 text-center mb-9 lg:mb-[58px]">
			Наше оборудование
		</h2>
		<ul class="flex flex-col items-center lg:flex-row justify-center gap-5 lg:gap-8">
			<li
				v-for="environmentOffer in environmentOffers"
				:key="environmentOffer.id"
				class="relative flex flex-col gap-5 lg:gap-6 p-9 lg:p-12 max-w-[369px] lg:max-w-[333px] w-full min-h-[360px] lg:min-h-[500px] rounded-4xl overflow-hidden text-[0px] xl:max-w-[362px]"
				:style="{ background: environmentOffer.bgColor }"
			>
				<h3
					class="text-xl lg:text-2xl font-bold leading-[26px] max-w-[240px] xl:max-w-[180px]"
					:style="{ color: environmentOffer.titleColor }"
				>
					{{ environmentOffer.title }}
				</h3>

				<div
					class="relative z-20"
					v-html="environmentOffer.description"
				/>

				<UiImage
					class="absolute max-h-[330px] -bottom-14 2xs:bottom-0 lg:-bottom-4 left-0 right-0"
					object
					:src="environmentOffer.bgImage"
				/>
			</li>
		</ul>
	</UContainer>
</template>
