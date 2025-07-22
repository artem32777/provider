export const useResendTimer = (initialSeconds = 60) => {
	const secondsLeft = ref(initialSeconds)
	let timer: ReturnType<typeof setInterval> | null = null
	const start = () => {
		clear()
		secondsLeft.value = initialSeconds
		timer = setInterval(() => {
			if (secondsLeft.value > 0) {
				secondsLeft.value--
			} else {
				clear()
			}
		}, 1000)
	}

	const clear = () => {
		if (timer) {
			clearInterval(timer)
			timer = null
		}
	}

	onUnmounted(clear)

	return {
		secondsLeft,
		start,
	}
}
