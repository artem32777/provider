<template>
	<UApp :toaster="{ class: 'max-lg:top-1 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-6 lg:bottom-6' }">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<ClientOnly>
			<ModalsContainer />
		</ClientOnly>
	</UApp>
</template>

<script setup lang="ts">
import './styles/main.css'
import './styles/main.scss'
import { ModalsContainer } from 'vue-final-modal'
</script>
