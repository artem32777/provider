export function isError(value: unknown): value is Error {
	return value !== null && typeof value === 'object' && 'message' in value && typeof value.message === 'string'
}
