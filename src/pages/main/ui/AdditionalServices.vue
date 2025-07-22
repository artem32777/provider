<script setup lang="ts">
import UiImage from '~/src/shared/ui/UiImage.vue'

const additionalServices: {
	icon: string
	title: string
	description: string
}[] = [
	{
		icon: 'img/additional-services/additional-services-1.svg',
		title: 'Аренда стоек',
		description: 'Получите собственную стойку в&nbsp;нашем дата-центре с&nbsp;круглосуточной поддержкой и&nbsp;гарантированной стабильностью. Отличное решение для&nbspмасштабируемого размещения серверов.',
	},
	{
		icon: 'img/additional-services/additional-services-2.svg',
		title: 'Колокейшн',
		description: 'Разместите своё оборудование в&nbsp;профессиональном дата-центре с&nbsp;отказоустойчивой инфраструктурой, стабильным питанием и&nbsp;быстрым интернетом. Всё, что нужно для бесперебойной работы.',
	},
	{
		icon: 'img/additional-services/additional-services-3.svg',
		title: 'Аренда юнитов',
		description: 'Арендуйте от&nbsp;одного юнита под ваши задачи&nbsp;&mdash; оптимально для старта или&nbspточечного размещения. Платите только за&nbsp;то, что&nbspдействительно нужно.',
	},
]
</script>

<template>
	<UContainer
		as="section"
		class="lg:py-[60px] lg:pb-[120px]"
	>
		<h2 class="mobile-h3 2xs:mobile-h2 lg:desktop-h2 text-center mb-9 lg:mb-14">
			Дополнительные услуги
		</h2>

		<ul class="flex flex-col lg:flex-row gap-4 lg:gap-8">
			<li
				v-for="additionalService in additionalServices"
				:key="additionalService.title"
				class="flex flex-col gap-3 lg:gap-6 p-6 lg:p-12 xl:max-w-[406px]"
			>
				<UiImage
					:src="additionalService.icon"
					class="max-h-16 inline-flex"
				/>

				<h3 class="mobile-h4 lg:desktop-h4">
					{{ additionalService.title }}
				</h3>

				<!-- <p class="lg:text-xl leading-[22px] lg:leading-[28px] mt-auto">
					{{ additionalService.description }}
				</p> -->

				<p
					class="lg:text-xl leading-[22px] lg:leading-[28px] lg:max-w-[309px]"
					v-html="additionalService.description"
				/>
			</li>
		</ul>
	</UContainer>
</template>
