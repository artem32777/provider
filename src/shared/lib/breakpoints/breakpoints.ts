import { breakpointsTailwind } from '@vueuse/core'

export const BREAKPOINTS = {
	'2xs': 393,
	// sm: 640
	// md: 768
	// lg: 1024
	// xl: 1280
	...breakpointsTailwind,
	'2xl': 1440,
} as const
