import type { Store } from 'pinia'

interface AppStore {
	state: {
		value: Record<string, unknown>
	}
}

export const useDisposeStore = (store: Store) => {
	store.$dispose()

	// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
	delete (usePinia() as AppStore).state.value[store.$id]
}
