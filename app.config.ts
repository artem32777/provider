export default defineAppConfig({
	ui: {
		container: {
			base: 'px-3 sm:px-3 lg:px-3',
		},
		formField: {
			slots: {
				container: 'mt-2',
				label: 'text-[#7E7E7E] text-[13px] font-medium',
				error: 'text-base mt-1 pl-1.5',
			},
		},
		input: {
			slots: {
				root: 'w-full',
				base: 'min-h-[60px] rounded-lg',
			},
			variants: {
				variant: {
					soft: 'bg-white hover:bg-white focus-visible:bg-white disabled:bg-white text-(--black-900)/80 focus-visible:ring-2 focus-visible:ring-(--blue)',
				},
				size: {
					md: {
						base: 'px-6.5 text-base',
					},
				},
			},
		},

		button: {
			variants: {
				size: {
					md: {
						base: 'text-base',
					},
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'link',
					class: 'text-(--blue) hover:text-(--blue-hover) active:text-(--blue-pressed) p-0',
				},
			],
		},
	},
})
