<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import BaseTab from '~/src/shared/ui/BaseTab.vue'
import { AppRoutes } from '~/src/shared/router/types'

const route = useRoute()
const items: TabsItem[] = [
	{ label: 'Электронные чеки', value: AppRoutes.personalAreaDocumentsChecks },
	{ label: 'Акты об оказании услуг', value: AppRoutes.personalAreaDocumentsServiceActs },
	{ label: 'Акты-сверки', value: AppRoutes.personalAreaDocumentsReconciliations },
	{ label: 'Счет-фактуры', value: AppRoutes.personalAreaDocumentsInvoices },
]
const active = computed<string>({
	get() {
		return String(route.name ?? AppRoutes.personalAreaDocumentsChecks)
	},
	set(name: string) {
		if (name !== route.name) {
			navigateTo({ name })
		}
	},
})
</script>

<template>
	<h1 class="desktop-h4 mb-8.5">
		Финансовые документы
	</h1>

	<BaseTab
		v-model="active"
		:items="items"
		:ui="{ root: 'mb-8' }"
	/>
	<NuxtPage />
</template>
