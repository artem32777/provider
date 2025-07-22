export function getIds<T extends string>(list: { id: T }[]) {
	return list.map(item => item.id)
}
