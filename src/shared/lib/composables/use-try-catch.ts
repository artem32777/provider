import { showCatchError } from '~/src/shared/lib/show-toast'

export type UseTryCatchHandler<T> = (...args: unknown[]) => Promise<Awaited<T>>

export type UseTryCatchReturn<T extends UseTryCatchHandler<ReturnType<T>>> = (
	...args: Parameters<T>
) => Promise<Awaited<ReturnType<T>>>

export function useTryCatch<T extends UseTryCatchHandler<ReturnType<T>>>(handler: T): UseTryCatchReturn<T> {
	return (async (...args: Parameters<typeof handler>) => {
		try {
			return await handler(...args)
		} catch (e: unknown) {
			showCatchError(e)
		}
	}) as UseTryCatchReturn<T>
}
