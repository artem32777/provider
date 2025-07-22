export function getListFromRouteQuery<T>(key: string): T[] {
	const route = useRoute()

	const query = route.query[key] as string | string[] | undefined

	if (!query) {
		return []
	}

	if (typeof query === 'string') {
		const item = JSON.parse(query)
		return [item]
	}

	return query.map(item => JSON.parse(item))
}
