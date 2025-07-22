<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import MyBalance from './MyBalance.vue'
import BaseTab from '~/src/shared/ui/BaseTab.vue'
import { AppRoutes } from '~/src/shared/router/types'

const route = useRoute()
const items: TabsItem[] = [
	{ label: 'Оплата', value: AppRoutes.personalAreaBalancePayment },
	{ label: 'История платежей', value: AppRoutes.personalAreaBalanceHistory },
	{ label: 'Предстоящие платежи', value: AppRoutes.personalAreaBalanceFuturePayments },
	{ label: 'Автоплатеж', value: AppRoutes.personalAreaBalanceAutoPayment },
]
const active = computed<string>({
	get() {
		return String(route.name ?? AppRoutes.personalAreaBalancePayment)
	},
	set(name: string) {
		if (name !== route.name) {
			navigateTo({ name })
		}
	},
})
</script>

<template>
	<MyBalance />
	<BaseTab
		v-model="active"
		:items="items"
	/>
	<NuxtPage />
</template>
