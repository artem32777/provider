<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import type { InputProps } from '#ui/components/Input.vue'

const {
	placeholder = '',
	size = 'xl',
	onlyDigits = false,
	modelValue = '',
	autocomplete = 'nope',
	maxLength = 0,
} = defineProps<{
	modelValue?: string
	disabled?: boolean
	placeholder?: string
	autocomplete?: InputHTMLAttributes['autocomplete']
	size?: InputProps['size']
	onlyDigits?: boolean
	maxLength?: number
}>()

const emit = defineEmits(['update:modelValue'])
const onInput = (event: Event) => {
	const input = event.target as HTMLInputElement
	let val = input.value

	if (onlyDigits) {
		val = val.replace(/\D/g, '')
		if (maxLength > 0 && val.length > maxLength) {
			val = val.slice(0, maxLength)
		}
	}
	input.value = val
	emit('update:modelValue', val)
}
</script>

<template>
	<UInput
		:value="modelValue"
		variant="none"
		:placeholder="placeholder"
		:disabled="disabled"
		:autocomplete="autocomplete"
		:size="size"
		:ui="{
			root: 'w-full rounded-xl bg-[#f1f1f1] hover:bg-gray-100 transition-colors',
			base: 'min-h-[49px] bg-transparent rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-0',
		}"
		@input="onInput"
	>
		<template
			v-if="$slots.trailing"
			#trailing
		>
			<slot name="trailing" />
		</template>
	</UInput>
</template>
