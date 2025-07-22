import { useBreakpoints } from '@vueuse/core'
import { BREAKPOINTS } from './breakpoints'

// Использовать ClientOnly, при SSR не работает
export const useAppBreakpointsStore = defineStore('app-breakpoints', () => {
	const breakpoints = useBreakpoints(BREAKPOINTS)

	return {
		breakpoints,
		current: computed(() => breakpoints.current().value.at(-1)),

		isGreaterOrEqualSm: computed(() => breakpoints.greaterOrEqual('sm').value),
		isGreaterOrEqualMd: computed(() => breakpoints.greaterOrEqual('md').value),
		isGreaterOrEqualLg: computed(() => breakpoints.greaterOrEqual('lg').value),
		isGreaterOrEqual2xl: computed(() => breakpoints.greaterOrEqual('2xl').value),
	}
})
