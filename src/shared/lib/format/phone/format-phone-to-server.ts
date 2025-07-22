export function formatPhoneToServer(value: string) {
	return value.replace(/[^+\d]/g, '').trim()
}
