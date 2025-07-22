import type { UseTryCatchHandler } from '~/src/shared/lib/composables/use-try-catch'
import { useIsLoading } from '~/src/shared/lib/composables/use-is-loading'
import { useTryCatch } from '~/src/shared/lib/composables/use-try-catch'

export function useTryCatchWithLoading<T extends UseTryCatchHandler<ReturnType<T>>>(handler: T) {
	const { isLoading, startLoading, finishLoading } = useIsLoading()

	const runWithTryCatch = useTryCatch(handler)

	async function runWithLoading(...args: Parameters<typeof handler>): Promise<Awaited<ReturnType<T>>> {
		try {
			startLoading()

			return await runWithTryCatch(...args)
		} finally {
			finishLoading()
		}
	}

	return {
		isLoading,
		runWithLoading,
		runWithTryCatch,
		startLoading,
		finishLoading,
	}
}
