export function formatNumberWithPrefixK(n: number) {
	if (n < 1000) {
		return `${n}`
	}

	const thousands = n / 1000

	if (n < 100000) {
		return `${thousands.toFixed(1).replace('.', ',')} К`
	}

	return `${Math.floor(thousands)} К`
}
