<script setup lang="ts">
import Advantages from './Advantages.vue'

const myServers = null
</script>

<template>
	<Advantages v-if="!myServers" />
</template>
