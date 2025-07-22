<template>
	<VueFinalModal
		class="base-modal"
		:content-class="contentClass"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		@update:model-value="close"
	>
		<UButton
			class="absolute top-3 right-3 p-2.5 text-(--color-black-900) hover:text-(--accent-blue-hover) active:text-(--accent-blue-pressed)"
			color="neutral"
			variant="link"
			size="xl"
			square
			:icon="LocalIcons.x"
			@click="close"
		/>

		<div class="base-modal__body-wrap">
			<div :class="bodyClass">
				<h4
					v-if="title"
					class="desktop-h5 text-center"
				>
					{{ title }}
				</h4>

				<slot :close="close" />
			</div>
		</div>
	</VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { LocalIcons } from '~/src/shared/icons/local-icons'

interface BaseModalUI {
	content?: string
	body?: string
}

const props = defineProps<{
	title?: string
	ui?: BaseModalUI
}>()

const emit = defineEmits(['update:modelValue'])

const contentClass = computed(() => {
	if (props.ui?.content) {
		return `base-modal__content w-full ${props.ui?.content}`
	}

	return `base-modal__content w-full max-w-[480px]`
})

const bodyClass = computed(() => {
	if (props.ui?.body) {
		return `base-modal__body ${props.ui?.body}`
	}

	return `base-modal__body p-11`
})

function close() {
	emit('update:modelValue', false)
}
</script>

<style lang="scss">
.base-modal {
  display: flex;
  align-items: center;
  justify-content: center;

	&__content {
		position: relative;
		display: flex;
		flex-direction: column;
		max-height: 95dvh;
		border-radius: 40px;
		background-color: var(--light-gray-default);
	}

	&__body-wrap {
		overflow: hidden;
		max-height: 95dvh;
		width: 100%;
	}

	&__body {
		overflow-y: auto;
	}
}
</style>
