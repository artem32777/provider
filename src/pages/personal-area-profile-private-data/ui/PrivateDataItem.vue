<script setup lang="ts">
import AppButton from '~/src/shared/ui/AppButton.vue'
import { LocalIcons } from '~/src/shared/icons/local-icons'

defineProps<{
	name: string
	label: string
}>()

const emit = defineEmits<{ change: [name: string] }>()
</script>

<template>
	<div class="flex gap-2 justify-between items-center">
		<div class="grid grid-cols-[auto_1fr] gap-x-4">
			<i class="w-16 h-16 flex items-center justify-center row-span-2 bg-black rounded-full">
				<UIcon
					:name="LocalIcons.chess"
					size="24"
				/>
			</i>
			<p class="text-(--black-600) text-sm leading-[130%] tracking-[-1.1%] font-semibold mt-0.5">
				{{ label }}
			</p>
			<p class="font-bold text-lg leading-[130%] tracking-[-1.1%] mb-5">
				{{ name }}
			</p>
		</div>
		<slot>
			<AppButton
				label="Изменить"
				variant="personal-area"
				:ui="{ base: 'p-0 justify-center w-30 h-12' }"
				@click="emit('change', name)"
			/>
		</slot>
	</div>
</template>
