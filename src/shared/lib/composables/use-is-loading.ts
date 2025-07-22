export function useIsLoading(initValue = false) {
	const [isLoading, toggle] = useToggle(initValue)

	function startLoading() {
		toggle(true)
	}

	function finishLoading() {
		toggle(false)
	}

	return {
		isLoading,
		toggleLoading: () => toggle(!isLoading.value),
		startLoading,
		finishLoading,
	}
}
