<template>
	<VueFinalModal
		class="mobile-modal"
		content-class="mobile-modal__content"
		overlay-transition="vfm-fade"
		content-transition="vfm-slide-down"
		swipe-to-close="down"
		@update:model-value="close"
	>
		<UButton
			class="absolute top-2.5 right-2.5 text-(--color-black-900) hover:text-(--accent-blue-hover) active:text-(--accent-blue-pressed)"
			color="neutral"
			variant="link"
			size="xl"
			square
			:icon="LocalIcons.x"
			@click="close"
		/>

		<div class="mobile-modal__body-wrap">
			<div :class="bodyClass">
				<h4
					v-if="title"
					class="desktop-h5 font-bold text-center"
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

interface MobileModalUI {
	mobileBody?: string
}

const props = defineProps<{
	title?: string
	ui?: MobileModalUI
}>()

const bodyClass = computed(() => {
	if (props.ui?.mobileBody) {
		return `mobile-modal__body ${props.ui?.mobileBody}`
	}

	return `mobile-modal__body px-6`
})

const emit = defineEmits(['update:modelValue'])

function close() {
	emit('update:modelValue', false)
}
</script>

<style lang="scss">
.mobile-modal {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	&__content {
		position: relative;
		display: flex;
		flex-direction: column;
		max-height: 95dvh;
		border-top-left-radius: 22px;
		border-top-right-radius: 22px;
		padding-top: 52px;
		width: 100%;
		background-color: var(--light-gray-default);

		&::before {
			content: '';
			position: absolute;
			top: 8px;
			left: 50%;
			transform: translateX(-50%);
			width: 55px;
			height: 4px;
			background-color: var(--ui-border-accented);
			border-radius: 999px;
		}
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
