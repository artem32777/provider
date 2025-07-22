import type { PagePaginationQuery } from '~/src/shared/api/types'

export interface UsePaginationOptions {
	page?: number
	limit?: number
}

export function usePagination(options: UsePaginationOptions = { page: 1, limit: 10 }) {
	const total = ref(0)

	const currentPageSize = ref(options.limit || 10)

	const currentPage = ref(options.page || 1)

	const isFirstPage = computed(() => currentPage.value === 1)

	const pageCount = computed(() => Math.max(1, Math.ceil(total.value / currentPageSize.value)))

	const isLastPage = computed(() => currentPage.value === pageCount.value)

	function setTotal(value: number) {
		total.value = value
	}

	function getPagePaginationQuery(): PagePaginationQuery {
		return {
			limit: currentPageSize.value,
			page: currentPage.value,
		}
	}

	function setPage(value: number) {
		currentPage.value = value
	}

	function setFirstPage() {
		currentPage.value = 1
	}

	function prev() {
		currentPage.value--
	}
	function next() {
		currentPage.value++
	}

	return {
		currentPage,
		currentPageSize,
		isFirstPage,
		isLastPage,
		total,
		pageCount,
		setTotal,
		getPagePaginationQuery,
		setPage,
		setFirstPage,
		next,
		prev,
	}
}
