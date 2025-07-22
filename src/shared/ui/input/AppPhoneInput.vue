<script setup lang="ts">
import type { InputProps } from '#ui/components/Input.vue'

const {
	placeholder = '+7',
	size = 'xl',
	inputUi = {},
	disabled = false,
	useBasePhoneInputUi = false,
} = defineProps<{
	placeholder?: string
	size?: InputProps['size']
	inputUi?: InputProps['ui']
	disabled?: boolean
	useBasePhoneInputUi?: boolean
}>()

const model = defineModel<string>()

const defaultBasePhoneInputUi: InputProps['ui'] = {
	root: 'w-full',
	base: 'min-h-[49px] bg-[#f1f1f1] disabled:bg-[#f1f1f1] text-black rounded-xl w-full transition-colors focus:outline-none focus:ring-0 focus:border-transparent hover:bg-gray-100',
}

const currentUi: InputProps['ui'] = useBasePhoneInputUi
	? {
			...defaultBasePhoneInputUi,
		}
	: {
			base: 'px-6',
			...inputUi,
		}
</script>

<template>
	<UInput
		v-model="model"
		v-maska
		type="tel"
		variant="soft"
		:disabled="disabled"
		data-maska="+7 (###) ### ## ##"
		:placeholder="placeholder"
		:size="size"
		:ui="currentUi"
	>
		<template
			v-if="$slots.trailing"
			#trailing
		>
			<slot name="trailing" />
		</template>
	</UInput>
</template>
