<script setup lang="ts">
import AppButton from '~/src/shared/ui/AppButton.vue'
import UiImage from '~/src/shared/ui/UiImage.vue'
import type { ImgSource } from '~/src/shared/types/dom'

const mobileImage: ImgSource[] = [
	{
		srcset: '/img/main-page/hero-mobile.webp',
		media: '(max-width: 1024px)',
		type: 'image/webp',
	},
]
</script>

<template>
	<UContainer as="section">
		<div class="flex flex-col xl:flex-row gap-9 xl:gap-8 max-w-[624px] xl:max-w-full xl:w-full mx-auto">
			<div class="flex flex-col gap-7 justify-center md:p-6 xl:justify-start xl:gap-8 xl:p-12">
				<h1 class="mobile-h2 2xs:mobile-h1 lg:desktop-h1">
					VDS&nbsp;/ VPS <br> моментальная
					выдача
				</h1>
				<p class="text-base md:text-xl text-(--black-700)">
					Выделенные и&nbsp;виртуальные серверы под проекты любой сложности и&nbsp;с&nbsp;моментальной активацией
				</p>
				<AppButton
					label="ПЕРЕЙТИ В КАТАЛОГ"
					block
					class="w-auto lg:w-[235px] xl:w-[233px] xl:px-[30px]"
				/>
			</div>
			<UiImage
				loading="eager"
				src="/img/main-page/hero.webp"
				class="w-full rounded-[50px] overflow-hidden xl:h-[478px] xl:rounded-[40px] xl:max-w-[624px]"
				:source-list="mobileImage"
				fetch-priority="high"
			/>
		</div>
	</UContainer>
</template>
