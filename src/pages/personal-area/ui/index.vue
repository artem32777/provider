<script setup lang="ts">
import { SITEMAP } from '~/src/shared/router/sitemap'

onBeforeMount(() => {
	navigateTo(SITEMAP.personalAreaProfile.route, { replace: true })
})
</script>

<template>
	<NuxtPage />
</template>
