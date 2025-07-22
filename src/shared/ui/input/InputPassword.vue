<script setup lang="ts">
import type { InputProps } from '@nuxt/ui/runtime/components/Input.vue.d.ts'
import { LocalIcons } from '~/src/shared/icons/local-icons'

defineProps<InputProps>()

const password = defineModel<string | number>()
const show = ref(false)
</script>

<template>
	<UInput
		v-model="password"
		variant="soft"
		:placeholder="placeholder || 'Пароль'"
		:ui="{
			base: 'pe-15',
			trailing: 'pe-3.5',
			...ui,
		}"
		:type="show ? 'text' : 'password'"
	>
		<template #trailing>
			<UButton
				color="neutral"
				variant="link"
				size="xl"
				:icon="show ? 'i-lucide-eye' : LocalIcons.eyeX"
				:aria-label="show ? 'Скрыть пароль' : 'Показать пароль'"
				:aria-pressed="show"
				aria-controls="password"
				@click="show = !show"
			/>
		</template>
	</UInput>
</template>
