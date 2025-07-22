export const useResizableString = (str: string, maxLength: number = 330) => {
	const [showFull, toggleShowFull] = useToggle()

	const isStringLong = computed(() => str.length > maxLength)

	const correctString = computed(() => {
		if (showFull.value) {
			return str
		}

		return str.slice(0, maxLength)
	})

	return {
		showFull,
		toggleShowFull,
		isStringLong,
		correctString,
	}
}
