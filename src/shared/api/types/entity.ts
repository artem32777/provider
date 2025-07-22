import type { UUID } from 'node:crypto'

export interface EntityBaseDates {
	createdAt: string
	deletedAt?: string | null
	updatedAt?: string
}

export interface EntityBase extends EntityBaseDates {
	id: UUID
	name: string
}
