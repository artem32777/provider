<script setup lang="ts">
import { LocalIcons } from '~/src/shared/icons/local-icons'
import type { ImgSource } from '~/src/shared/types/dom'

const {
	fit = 'cover',
	loading = 'lazy',
	fetchPriority = 'low',
	fileType = 'image/webp',
	withText,
} = defineProps<{
	src?: string | null
	loading?: HTMLImageElement['loading']
	alt?: string
	fit?: 'cover' | 'contain'
	withText?: boolean | string
	sourceList?: ImgSource[]
	fetchPriority?: HTMLImageElement['fetchPriority']
	fileType?: string
}>()

const [isError, toggleError] = useToggle()

const fitClass = computed(() => (fit === 'cover' ? 'object-cover' : 'object-contain'))

const text = computed(() => typeof withText === 'string' ? withText : 'Фото в обработке, скоро добавим!')
</script>

<template>
	<span class="ui-image block h-full overflow-hidden">
		<span
			v-if="!src || isError"
			class="ui-image__icon-wrap flex flex-col gap-4 sm:gap-5 items-center justify-center h-full"
		>
			<span
				v-if="withText"
				class="text-sm text-(--ui-text-dimmed) text-center px-2"
			>
				{{ text }}
			</span>

			<UIcon
				:name="LocalIcons.camera"
				class="ui-image__icon size-5 text-(--ui-bg-accented)"
			/>
		</span>

		<picture
			v-else
			class="text-[0px] leading-[0px]"
		>
			<template v-if="sourceList">
				<source
					v-for="item of sourceList"
					:key="item.srcset"
					v-bind="item"
				>
			</template>
			<img
				class="select-none pointer-events-none h-full w-full"
				:type="fileType"
				:src="src"
				:loading="loading"
				:class="fitClass"
				:alt="alt"
				:fetchpriority="fetchPriority"
				@error="toggleError(true)"
			>
		</picture>

		<slot />
	</span>
</template>
