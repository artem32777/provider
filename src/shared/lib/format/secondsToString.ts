export function secondsToString(value: number) {
	const m = Math.floor(value / 60)
	const s = value % 60
	return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
