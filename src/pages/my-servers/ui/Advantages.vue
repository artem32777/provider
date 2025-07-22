<script setup lang="ts">
import UiImage from '~/src/shared/ui/UiImage.vue'
import { LocalIcons } from '~/src/shared/icons/local-icons'
import { SITEMAP } from '~/src/shared/router/sitemap'
import AppButton from '~/src/shared/ui/AppButton.vue'

const advantages: {
	icon: LocalIcons
	title: string
	text: string
}[] = [
	{
		icon: LocalIcons.cloud,
		title: 'Облачное хранилище',
		text: 'Каждый сервер включает высокоскоростное облачное хранилище с доступом через сеть 10 Гбит, что позволяет быстро и эффективно работать с данными',
	},
	{
		icon: LocalIcons.share,
		title: 'Локальная сеть 10 Гбит',
		text: 'Объединяйте все свои серверы в единую инфраструктуру с помощью локальной сети 10 Гбит, расширяя её по мере роста вашего бизнеса',
	},
	{
		icon: LocalIcons.settings,
		title: 'Гибкая настройка',
		text: 'Адаптация серверов под любые требования, оптимальная мощность и производительность, чтобы вы могли сосредоточиться на развитии, а не на технических нюансах',
	},
	{
		icon: LocalIcons.component,
		title: 'Надёжные компоненты',
		text: 'Все серверы оснащены RAID-массивом, ECC-памятью и серверными NVMe-накопителями для максимальной надёжности и быстродействия',
	},
]
</script>

<template>
	<div class="flex gap-2 justify-between items-center bg-white mb-6 rounded-2xl overflow-hidden max-h-[236px]">
		<div class="p-8">
			<h1 class="mb-2 font-bold leading-[150%] ">
				VDS / VPS моментальная выдача
			</h1>
			<p class="mb-6 leading-[140%] max-w-[560px] font-semibold">
				Выделенные и&nbsp;виртуальные серверы под&nbsp;проекты любой сложности и с моментальной активацией
			</p>
			<AppButton
				label="Создать сервер"
				variant="personal-area"
				size="sm"
				:to="SITEMAP.personalAreaCreateServer.route"
			/>
		</div>
		<UiImage
			src="/img/my-servers.webp"
			fetch-priority="high"
			class="w-[300px] h-full"
		/>
	</div>
	<ul class="grid grid-cols-2 gap-4">
		<li
			v-for="item in advantages"
			:key="item.title"
			class="bg-white py-8 px-7.5 rounded-2xl"
		>
			<i class="bg-black w-14 h-14 rounded-full flex items-center justify-center mb-6">
				<UIcon
					:name="item.icon"
					size="24"
				/>
			</i>
			<h3 class="mb-4 font-bold text-xl leading-[110%]">
				{{ item.title }}
			</h3>
			<p class="font-semibold leading-[140%]">
				{{ item.text }}
			</p>
		</li>
	</ul>
</template>
