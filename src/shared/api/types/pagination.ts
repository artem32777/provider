interface BasePaginationQuery {
	limit: number
}

export interface OffsetPaginationQuery extends BasePaginationQuery {
	offset: number
}

export interface PagePaginationQuery extends BasePaginationQuery {
	page: number
}

export type PaginationQuery = OffsetPaginationQuery | PagePaginationQuery

export interface PaginationDTO {
	currentPage: number
	itemCount: number
	itemsPerPage: number
	totalItems: number
	totalPages: number
}
