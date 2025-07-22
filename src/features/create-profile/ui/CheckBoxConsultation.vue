<script setup lang="ts">
import { labelConsult, labelManager } from '../model/checkboxLabels'
import BaseCheckbox from '~/src/shared/ui/BaseCheckbox.vue'

const model = defineModel<boolean>()
</script>

<template>
	<BaseCheckbox
		v-model="model"
	>
		<template #label>
			<div class="flex flex-col">
				<span>{{ labelConsult }}</span>
				<span class="text-gray-500 font-normal">{{ labelManager }}</span>
			</div>
		</template>
	</BaseCheckbox>
</template>
