<script setup lang="ts">
import AppLogo from '~/src/shared/ui/logo/AppLogo.vue'
import { SITEMAP } from '~/src/shared/router/sitemap'
</script>

<template>
	<div class="flex flex-col min-h-[100dvh] justify-center items-center bg-(--gray)">
		<NuxtLink
			:to="SITEMAP.main.route"
			class="hidden sm:flex absolute top-0 my-4 mx-6"
		>
			<AppLogo />
		</NuxtLink>
		<div class="grow flex items-center">
			<slot />
		</div>
	</div>
</template>
