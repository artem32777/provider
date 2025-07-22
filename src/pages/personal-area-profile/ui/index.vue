<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { AppRoutes } from '~/src/shared/router/types'
import BaseTab from '~/src/shared/ui/BaseTab.vue'
import { CreateProfile } from '~/src/features/create-profile'

const route = useRoute()
const items: TabsItem[] = [
	{ label: 'Личные данные', value: AppRoutes.personalAreaProfilePrivateData },
	{ label: 'Безопасность', value: AppRoutes.personalAreaProfileSafety },
	{ label: 'Доступ', value: AppRoutes.personalAreaProfileAccess },
	{ label: 'Уведомления', value: AppRoutes.personalAreaProfileNotifications },
	{ label: 'Активные сессии', value: AppRoutes.personalAreaProfileActiveSessions },
]
const active = computed<string>({
	get() {
		return String(route.name ?? AppRoutes.personalAreaProfilePrivateData)
	},
	set(name: string) {
		if (name !== route.name) {
			navigateTo({ name })
		}
	},
})

const [isFillProfile, toggleIsFillProfile] = useToggle(false)

onMounted(() => {
	setIsNotFillProfile()

	if (isFillProfile.value) {
		navigateTo({ name: AppRoutes.personalAreaProfilePrivateData }, { replace: true })
	}
})

function setIsNotFillProfile() {
	const lsKey = 'PERSONAL_AREA_IS_FILL_PROFILE'
	const isFillProfile = localStorage.getItem(lsKey)

	toggleIsFillProfile(Boolean(isFillProfile))

	localStorage.setItem(lsKey, '1')
}
</script>

<template>
	<h1
		class="mobile-h5 2xs:mobile-h4 xl:desktop-h4"
		:class="[!isFillProfile ? 'mb-[56px]' : 'mb-8']"
	>
		Профиль
	</h1>

	<CreateProfile v-if="!isFillProfile" />

	<template v-else>
		<BaseTab
			v-model="active"
			:items="items"
		/>

		<NuxtPage />
	</template>
</template>
