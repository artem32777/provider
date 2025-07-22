import { BaseModalAsync } from './BaseModal/index'
import { MobileModalAsync } from './MobileModal/index'
import { useAppBreakpointsStore } from '~/src/shared/lib/breakpoints/store'

export function getModalComponent() {
	return useAppBreakpointsStore().isGreaterOrEqualSm ? BaseModalAsync : MobileModalAsync
}
