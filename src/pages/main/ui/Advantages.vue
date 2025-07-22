<script setup lang="ts">
import UiImage from '~/src/shared/ui/UiImage.vue'
import type { ImgSource } from '~/src/shared/types/dom'

const advantages: { title: string, description: string, bgImage: string, bgImageMobile: ImgSource[] }[] = [
	{
		title: 'Мгновенный старт',
		description: 'Сервер доступен уже через пару минут после оформления заявки',
		bgImage: 'img/main-page/advantages/advantage-1.webp',
		bgImageMobile: [
			{
				srcset: '/img/main-page/advantages/advantage-1-mobile.webp',
				media: '(max-width: 1023px)',
			},
		],
	},
	{
		title: 'Интеграция с ЭДО',
		description: 'Интеграция с ЭДО позволяет легко и быстро обмениваться документами с партнерами и клиентами',
		bgImage: 'img/main-page/advantages/advantage-2.webp',
		bgImageMobile: [
			{
				srcset: '/img/main-page/advantages/advantage-2-mobile.webp',
				media: '(max-width: 1023px)',
				type: 'image/webp',
			},
		],
	},
	{
		title: 'Российский хостинг',
		description: 'Мы соблюдаем российские законодательные требования, обеспечивая вашу юридическую безопасность',
		bgImage: 'img/main-page/advantages/advantage-3.webp',
		bgImageMobile: [
			{
				srcset: '/img/main-page/advantages/advantage-3-mobile.webp',
				media: '(max-width: 1023px)',
				type: 'image/webp',
			},
		],
	},
	{
		title: 'Гибкая оплата',
		description: 'Мы предлагаем различные способы оплаты — безналичный расчет с НДС, банковский перевод, СБП и другие методы',
		bgImage: 'img/main-page/advantages/advantage-4.webp',
		bgImageMobile: [
			{
				srcset: '/img/main-page/advantages/advantage-4-mobile.webp',
				media: '(max-width: 1023px)',
				type: 'image/webp',
			},
		],
	},
]
</script>

<template>
	<UContainer
		as="section"
		class="flex flex-col items-center pb-[36px] lg:py-[60px]"
	>
		<h2 class="mobile-h2 lg:desktop-h2 mb-8 text-center">
			Выбирайте надёжного партнёра
		</h2>

		<p class="lg:text-lg text-center leading-[22px] max-w-[944px] mb-9 lg:mb-14 lg:leading-[28px] xl:tracking-[1px]">
			Мы&nbsp;учли всё, что действительно помогает бизнесу запускаться быстрее, работать стабильнее и&nbsp;не&nbsp;тратить ресурсы на&nbsp;лишние настройки
		</p>

		<div class="max-w-[369px] lg:max-w-[1064px] w-full flex flex-col gap-5 lg:gap-8">
			<article
				v-for="advantage in advantages"
				:key="advantage.title"
				class="relative flex flex-col lg:flex-row justify-between  bg-(--gray) rounded-[32px] min-h-[360px] lg:min-h-[239px]"
			>
				<div class="p-6 lg:py-12 lg:pl-12">
					<h3 class="mobile-h4 lg:desktop-h4 mb-5 lg:mb-6">
						{{ advantage.title }}
					</h3>

					<p class="lg:text-lg leading-[22px] lg:leading-[28px]">
						{{ advantage.description }}
					</p>
				</div>
				<UiImage
					class="shrink-0 lg:h-[239px]"
					:src="advantage.bgImage"
					:source-list="advantage.bgImageMobile"
					alt="Advantage"
				/>
			</article>
		</div>
	</UContainer>
</template>
