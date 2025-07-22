import type { PaginationDTO, PaginationQuery, PagePaginationQuery, OffsetPaginationQuery } from './pagination'

export type * from './entity'
export type { PaginationDTO, PaginationQuery, PagePaginationQuery, OffsetPaginationQuery }
export type * from './sort'
export * from './upload'

export interface SearchQuery {
	search: string
}

export interface PaginationResponse<T> {
	items: T[]
	pagination: PaginationDTO
}

export type HTMLText = string
