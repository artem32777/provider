import type { UUID } from 'node:crypto'
import { v4 } from 'uuid'

export function generateUUID() {
	return v4() as UUID
}
