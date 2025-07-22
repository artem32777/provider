<script setup lang="ts">
import AppButton from '~/src/shared/ui/AppButton.vue'

defineProps<{
	onClick: () => void
}>()
</script>

<template>
	<div class="pt-4 pb-4 sm:pb-0">
		<p class="mb-8 text-center desktop-body-s">
			Заявка на&nbsp;обратный звонок принята. Обычно мы&nbsp;перезваниваем в&nbsp;течение 30&nbsp;минут.
		</p>

		<AppButton
			class="w-full"
			block
			@click="onClick"
		>
			Хорошо
		</AppButton>
	</div>
</template>
