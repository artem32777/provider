import type { Toast } from '#ui/composables/useToast'
import { isError } from '~/src/shared/lib/check-type/is-error'
import { generateUUID } from '~/src/shared/lib/mock/generate-uuid'

type ShowToastOptions = Omit<Partial<Toast>, 'icon' | 'color' | 'id' | 'description'>

const successOptions: Partial<Toast> = {
	color: 'success',
	title: 'Успех!',
}

const errorOptions: Partial<Toast> = {
	color: 'error',
	title: 'Ошибка!',
}

const warningOptions: Partial<Toast> = {
	color: 'warning',
	title: 'Внимание!',
}

const infoOptions: Partial<Toast> = {
	color: 'neutral',
	title: 'Инфо',
}

export function showSuccessToast(description?: string, options?: ShowToastOptions) {
	useToast().add({
		id: generateUUID(),
		...successOptions,
		description,
		...options,
	})
}

export function showErrorToast(description?: string, options?: ShowToastOptions) {
	useToast().add({
		id: generateUUID(),
		...errorOptions,
		description,
		...options,
	})
}

export function showWarningToast(description?: string, options?: ShowToastOptions) {
	useToast().add({
		id: generateUUID(),
		...warningOptions,
		description,
		...options,
	})
}

export function showInfoToast(description?: string, options?: ShowToastOptions) {
	useToast().add({
		id: generateUUID(),
		...infoOptions,
		description,
		...options,
	})
}

export function showCatchError(e: unknown) {
	if (import.meta.client && isError(e)) {
		showErrorToast(e.message)
	}
}
