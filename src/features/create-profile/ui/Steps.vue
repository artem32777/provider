<script setup lang="ts">
import type { ProfileStepKeyEnum } from '../model/profileSteps'
import { profileSteps } from '../model/profileSteps'

defineProps<{
	activeKey: ProfileStepKeyEnum
}>()
</script>

<template>
	<ul class="flex items-center">
		<li
			v-for="(step, index) in profileSteps"
			:key="`step-${step.key}`"
			class="flex items-center relative after:content-[''] after:h-px after:bg-[#b2b2b2] after:w-[100px] after:ml-6 after:mr-6"
			:class="{ 'after:hidden': index === profileSteps.length - 1 }"
		>
			<span
				class="mobile-h5 text-nowrap"
				:class="step.key === activeKey ? 'text-black' : 'text-[#b2b2b2] font-normal'"
			>
				{{ step.label }}
			</span>
		</li>
	</ul>
</template>
