<script setup lang="ts">
import { TheHeader } from '~/src/widgets/the-header'
import { TheFooter } from '~/src/widgets/the-footer'
</script>

<template>
	<div class="flex flex-col min-h-[100dvh]">
		<TheHeader />
		<slot />
		<TheFooter />
	</div>
</template>
