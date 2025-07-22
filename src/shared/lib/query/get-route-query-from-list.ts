export function getRouteQueryFromList<T>(list: T[], keys: (keyof T)[]) {
	if (!list.length) {
		return
	}

	const mappedItem = {} as T

	return list.map(item => {
		for (const key of keys) {
			mappedItem[key] = item[key]
		}

		return JSON.stringify(mappedItem)
	})
}
