<script setup lang="ts">
const isOpen = defineModel<boolean>({ required: true })
</script>

<template>
	<button
		class="cursor-pointer xl:hidden p-2.5"
		@click="isOpen = !isOpen"
	>
		<UIcon
			:name="isOpen ? 'i-local-x' : 'i-heroicons-bars-3-solid'"
			:class="{ 'mr-3': isOpen }"
			size="24"
		/>
	</button>
</template>
