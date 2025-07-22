<script setup lang="ts">
import Summary from './Summary.vue'
import Hero from './Hero.vue'
import Solutions from './Solutions.vue'
import Consultant from './Consultant.vue'
import Tarriffs from './Tarriffs.vue'
import Environment from './Environment.vue'
import { defineAsyncComponent, hydrateOnVisible } from 'vue'
import { LandingSectionsIds } from '~/src/widgets/the-header/constants/landing-sections-ids'

const LazyHydrationAdvantages = defineAsyncComponent({
	loader: () => import('./Advantages.vue'),
	hydrate: hydrateOnVisible(),
})

const LazyHydrationAdditionalServices = defineAsyncComponent({
	loader: () => import('./AdditionalServices.vue'),
	hydrate: hydrateOnVisible(),
})

const LazyHydrationTryForFree = defineAsyncComponent({
	loader: () => import('./TryForFree.vue'),
	hydrate: hydrateOnVisible(),
})

const LazyHydrationFAQ = defineAsyncComponent({
	loader: () => import('./FAQ.vue'),
	hydrate: hydrateOnVisible(),
})
</script>

<template>
	<main
		:id="LandingSectionsIds.hero"
		class="flex flex-col gap-10 py-10 xl:py-[90px] pt-[93px] xl:pt-[158px] xl:gap-[90px]"
	>
		<Hero />

		<Solutions :id="LandingSectionsIds.catalog" />

		<Environment />

		<Consultant />

		<Tarriffs />

		<LazyHydrationAdvantages :id="LandingSectionsIds.advantages" />

		<Summary :id="LandingSectionsIds.about" />

		<LazyHydrationAdditionalServices />

		<LazyHydrationTryForFree />

		<LazyHydrationFAQ :id="LandingSectionsIds.faq" />
	</main>
</template>
