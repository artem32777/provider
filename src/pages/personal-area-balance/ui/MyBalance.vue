<script setup lang="ts">
import UiImage from '~/src/shared/ui/UiImage.vue'
</script>

<template>
	<div class="relative mb-12 bg-white rounded-2xl py-6 px-8 grid items-center">
		<div class="font-bold leading-[120%] text-5xl tracking-[-0.5px]">
			0 ₽
		</div>
		<p class="font-semibold leading-[130%] tracking-[-0.176px] text-[#7E7E7E]">
			Ваш баланс
		</p>
		<UiImage
			class="absolute top-0 right-0"
			src="/img/personal-area/balance.png"
		/>
	</div>
</template>
