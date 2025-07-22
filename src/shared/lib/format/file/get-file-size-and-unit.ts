import { FILE_SIZE_UNITS } from '~/src/shared/lib/format/file/file-size-units'

const FILE_SIZE_DIVIDER = 1024

const FILE_SIZE_DIVIDERS = [
	1,
	FILE_SIZE_DIVIDER,
	FILE_SIZE_DIVIDER * 1e3,
	FILE_SIZE_DIVIDER * 1e6,
	FILE_SIZE_DIVIDER * 1e9,
] as const

function getUnitIdxBy(size: number): number {
	let idx = 0

	size = size / FILE_SIZE_DIVIDER

	while (size > 1) {
		idx++
		size = size / FILE_SIZE_DIVIDER
	}

	return idx
}

export function getFileSizeAndUnit(fileSize: number): string | null {
	const idx = getUnitIdxBy(fileSize)

	const divider = FILE_SIZE_DIVIDERS[idx]

	const size = (fileSize / divider).toFixed(1)

	return `${size} ${FILE_SIZE_UNITS[idx]}`
}
