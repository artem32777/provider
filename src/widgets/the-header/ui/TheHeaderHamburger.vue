<script setup lang="ts">
import TheHeaderMenu from './TheHeaderMenu.vue'
import TheHeaderHamburgerTrigger from './TheHeaderHamburgerTrigger.vue'

const isOpen = defineModel<boolean>({ required: true })

watch(() => isOpen.value, (val) => document.body.classList.toggle('overflow-hidden', val))
</script>

<template>
	<aside
		v-if="isOpen"
		class="fixed inset-0 z-50 bg-white py-11 px-6"
	>
		<TheHeaderHamburgerTrigger
			v-model="isOpen"
			class="absolute right-1 top-1"
		/>
		<TheHeaderMenu
			:is-mobile-menu-open="isOpen"
			@click="isOpen = false"
		/>
	</aside>
</template>
