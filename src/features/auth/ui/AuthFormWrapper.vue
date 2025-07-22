<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
	<div class="absolute inset-0 sm:relative sm:inset-auto bg-(--gray-light) p-6 sm:p-10 sm:pt-11 sm:pb-11.5  rounded-none sm:rounded-[40px] flex flex-col items-center justify-center">
		<slot name="header">
			<h1 class="desktop-h5 mb-9 sm:mb-14 text-center">
				{{ title }}
			</h1>
		</slot>
		<slot name="form" />
	</div>
</template>
