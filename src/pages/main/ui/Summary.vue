<script setup lang="ts">
import type { ImgSource } from '~/src/shared/types/dom'
import UiImage from '~/src/shared/ui/UiImage.vue'

const dl: { dt: string, dd: number }[] = [
	{
		dt: 'лет на IT рынке',
		dd: 15,

	},
	{
		dt: 'готовых конфигураций',
		dd: 135,

	},
	{
		dt: 'ЦОДА',
		dd: 4,
	},
	{
		dt: 'корпоративных клиентов',
		dd: 75,
	},
]

const mobileImage: ImgSource[] = [
	{
		srcset: '/img/main-page/data-center-mobile.webp',
		media: '(max-width: 1280px)',
		type: 'image/webp',
	},
]
</script>

<template>
	<UContainer
		as="section"
		class="lg:pt-[60px]"
	>
		<UiImage
			src="/img/main-page/logo.svg"
			class="mb-10 lg:mb-13 w-[300px] lg:w-[600px] text-center mx-auto"
			alt="Dataway Logo"
		/>

		<dl class="grid grid-flow-row grid-cols-2 lg:flex gap-2 justify-between w-full mb-10 lg:mb-22 lg:pt-8 lg:pb-11 sm:px-21 rounded-[40px] lg:bg-white">
			<div
				v-for="item in dl"
				:key="item.dt"
				class="flex flex-col items-center bg-white pt-4 px-6 pb-7 lg:p-0 rounded-[24px]"
			>
				<dd class="text-[64px] lg:text-[100px] text-(--blue) font-bold mb-2 lg:mb-1 xl:mb-3 tracking-widest">
					{{ item.dd }}
				</dd>

				<dt class="lg:text-xl text-(--black-800) text-center leading-[21px]">
					{{ item.dt }}
				</dt>
			</div>
		</dl>

		<article class="grid md:grid-cols-2 gap-8 md:gap-5 rounded-[40px] bg-white overflow-hidden">
			<div class=" lg:text-xl p-6 lg:p-11 leading-[22px] lg:leading-[28px]">
				<p class="mb-3">
					Центр обработки данных уровня Tier III от&nbsp;компании DataWay предоставляет инновационные IT-решения для бизнеса с&nbsp;2023 года благодаря уникальной платформе для обработки данных и&nbsp;оперативному внедрению гибких решений.
				</p>
				<p> Мы&nbsp;предлагаем высококачественные услуги, обеспечивая непрерывную поддержку и&nbsp;консультации, а&nbsp;также индивидуальный подход к&nbsp;каждому проекту. Используем только надёжные enterprise-серверы и&nbsp;снижаем стоимость за&nbsp;счет ПО&nbsp;собственной разработки, продуманной логистики&nbsp;и&nbsp;оптимизированной структуры дата-центра.</p>
			</div>
			<UiImage
				src="img/main-page/data-center.webp"
				:source-list="mobileImage"
				class="w-full"
				alt="Data Center"
			/>
		</article>
	</UContainer>
</template>
