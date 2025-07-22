export type SortDirection = 'asc' | 'desc' | 'ASC' | 'DESC'
export type SortByEntityDates = 'createdAt' | 'updatedAt'

export type SortRecord<T extends string = SortByEntityDates> = Record<T, SortDirection>

export type SortQuery = {
	sortDirection: SortDirection
}
