import type { FileSizeUnit } from './types'
import { FILE_SIZE_UNITS } from './file-size-units'

export function convertToBytes(size: number, unit: FileSizeUnit): number {
	const unitIndex = FILE_SIZE_UNITS.indexOf(unit)

	return size * Math.pow(1024, unitIndex)
}
