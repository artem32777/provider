import type { UUID } from 'node:crypto'
import type { EntityBaseDates } from '~/src/shared/api/types/entity'

export interface Upload {
	id: UUID
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
	duration?: number | null
	mimetype: string
	size: number
	isPrivate: boolean
	isLinked?: boolean
	name: string
	path?: string // Этого поля нет. Для моков
}

export interface EntityUpload extends EntityBaseDates {
	id: UUID
	fileId: UUID
	entityId: UUID
	file: Upload
	orderIndex: number
}
