<script setup lang="ts">
import AppButton from '~/src/shared/ui/AppButton.vue'
import UiImage from '~/src/shared/ui/UiImage.vue'
</script>

<template>
	<section class="bg-(--black-900) py-10 lg:py-30">
		<UContainer>
			<div class="relative flex flex-col gap-9 md:gap-14 p-6 md:p-12 rounded-[32px] lg:rounded-[40px] overflow-hidden bg-white">
				<div class="max-w-[664px]">
					<h3 class="mobile-h3 md:desktop-h3 mb-5 lg:mb-6 max-w-[250px] sm:max-w-full">
						Что выбрать&nbsp;&mdash; VPS или VDS?
					</h3>

					<p class="md:text-xl leading-[22px] lg:leading-[28px]">
						Оставьте заявку, и&nbsp;наши специалисты помогут подобрать оптимальную конфигурацию под ваши задачи
					</p>
				</div>

				<AppButton
					label="ЗАДАТЬ ВОПРОС"
					block
					class="max-w-[328px] w-full"
				/>

				<UiImage
					src="/img/call-consultant-banner.webp"
					class="hidden lg:block absolute right-0 top-0"
				/>
			</div>
		</UContainer>
	</section>
</template>
