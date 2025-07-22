<script setup lang="ts">
import { twJoin } from 'tailwind-merge'

const {
	color,
	size,
	variant,
	...props
} = defineProps<{
	ui?: Record<string, string>
	color?: 'secondary'
	size?: 'sm' | 'lg'
	variant?: 'ghost' | 'personal-area'
}>()

const customUi = {
	base: twJoin(
		'cursor-pointer',
		getPaddingClasses(),
		getRoundedClass(),
		getFontClasses(),
		getColorClasses(),
	),
}

function getColorClasses() {
	switch (variant) {
		case 'ghost': {
			return color === 'secondary'
				? 'bg-transparent text-(--black-900) hover:text-(--black-800) active:text-(--black-700) disabled:text-(--black-500)'
				: 'bg-transparent text-(--blue) hover:text-(--blue-hover) hover:bg-transparent active:text-(--blue-pressed) disabled:text-(--blue)/50'
		}
		case 'personal-area': {
			return 'bg-black hover:bg-black/70 active:bg-black/50'
		}
	}

	return color === 'secondary'
		? 'bg-(--gray-light) text-(--black-900) hover:bg-(--gray-hover) active:bg-(--gray-pressed) disabled:text-(--black-900)/50'
		: 'bg-(--blue) text-white hover:bg-(--blue-hover) active:bg-(--blue-pressed) disabled:bg-(--blue)/50'
}

function getPaddingClasses() {
	switch (variant) {
		case 'personal-area': {
			return 'py-3.5 px-6'
		}
	}

	return size === 'sm'
		? 'py-2.5 px-4'
		: size === 'lg'
			? 'py-5 px-25'
			: 'py-5 px-8'
}

function getFontClasses() {
	switch (variant) {
		case 'personal-area': {
			if (size === 'sm') {
				return 'text-sm tracking-[-1%]'
			}
		}
	}

	return 'text-base font-bold'
}

function getRoundedClass() {
	switch (variant) {
		case 'personal-area': {
			return 'rounded-[12px]'
		}
	}

	return 'rounded-full'
}
</script>

<template>
	<UButton
		v-bind="props"
		:ui="{
			...ui,
			base: twJoin(customUi.base, ui?.base),
		}"
	>
		<slot />
	</UButton>
</template>
