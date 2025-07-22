import type { UUID } from 'node:crypto'
import { reactive } from 'vue'

export function useReactiveArray<T extends { id: UUID }>(init: T[] = []) {
	const list = reactive<T[]>(init)

	function add(item: T) {
		// @ts-ignore
		list.push(item)
	}

	function updateById(newValue: T) {
		const index = getIndexById(newValue.id)

		if (index !== -1) {
			const item = list[index]

			for (const key in newValue) {
				// @ts-ignore
				item[key] = newValue[key]
			}
		}
	}

	function removeById(id: UUID) {
		const index = getIndexById(id)

		if (index !== -1) {
			list.splice(index, 1)
		}
	}

	function getIndexById(id: UUID) {
		return list.findIndex(item => item.id === id)
	}

	return {
		list,
		add,
		removeById,
		updateById,
	}
}
