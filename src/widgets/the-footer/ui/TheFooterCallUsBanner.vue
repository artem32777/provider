<script setup lang="ts">
import AppButton from '~/src/shared/ui/AppButton.vue'
import UiImage from '~/src/shared/ui/UiImage.vue'
import { getCallBackModel } from '~/src/features/get-call-back'
</script>

<template>
	<article class="relative p-6 lg:p-[48px] rounded-[32px] lg:rounded-[40px] bg-white overflow-hidden">
		<UiImage
			src="img/call-us-banner.webp"
			class="absolute right-0 top-0 hidden lg:flex"
		/>

		<div class="flex flex-col gap-[56px] max-w-[460px] xl:max-w-[600px] w-full">
			<div class="flex flex-col gap-[24px]">
				<h2 class="mobile-h3 leading-[30px] lg:leading-[44px] lg:desktop-h3">
					Позвонить
				</h2>

				<p class="text-base leading-[22px] lg:text-xl lg:leading-[30px] text-(--black-800)/80">
					Оставьте заявку на&nbsp;обратный звонок или свяжитесь с&nbsp;нами по&nbsp;телефону
				</p>
			</div>

			<div class="flex flex-col items-start justify-start gap-[24px]">
				<UButton
					variant="link"
					label="+7 (800) 000 00 00"
					to="tel:+78000000000"
					:ui=" {
						label: 'text-(--black-900) text-2xl leading-[26px] lg:text-[32px] lg:leading-[35px] font-bold self-start',

					}"
					class="text-(--black-900)"
				/>

				<AppButton
					label="Обратный звонок"
					block
					class="uppercase max-w-[362px] w-full px-[24px]"
					@click="getCallBackModel.openGetCallBackModal"
				/>
			</div>
		</div>
	</article>
</template>
