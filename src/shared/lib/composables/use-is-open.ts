export function useIsOpen(initValue = false) {
	const [isOpen, toggle] = useToggle(initValue)

	function close() {
		toggle(false)
	}

	function open() {
		toggle(true)
	}

	return {
		isOpen,
		toggle: () => toggle(!isOpen.value),
		open,
		close,
	}
}
