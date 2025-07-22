export const useHideOnScroll = (threshold: number = 100) => {
	const isVisible = ref(true)
	const lastScrollY = ref(0)

	const handleScroll = () => {
		const { y: scrollY } = useScroll(window)

		isVisible.value = !(scrollY.value > lastScrollY.value && scrollY.value > threshold)

		lastScrollY.value = scrollY.value
	}

	onMounted(() => window.addEventListener('scroll', handleScroll))

	onUnmounted(() => window.removeEventListener('scroll', handleScroll))

	return { isVisible }
}
