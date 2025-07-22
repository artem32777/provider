<script setup lang="ts">
import type { CheckboxProps } from '@nuxt/ui/runtime/components/Checkbox.vue.d.ts'

const model = defineModel<boolean>()

defineProps<Partial<CheckboxProps>>()

const baseCheckboxUi: CheckboxProps['ui'] = {
	base: 'w-[18px] h-[18px]',
}
</script>

<template>
	<UCheckbox
		v-model="model"
		:label="label"
		color="neutral"
		size="xl"
		:ui="{ ...baseCheckboxUi, ...ui }"
	>
		<template #label>
			<slot name="label" />
		</template>
	</UCheckbox>
</template>
