<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slugs) ? route.params.slugs.join('/') : route.params.slugs
</script>

<template>
	<div>
		<h1>{{ slug }}</h1>
	</div>
</template>
