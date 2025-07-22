const formatterNumber = new Intl.NumberFormat('ru-Ru')

export function formatNumber(num: number) {
	return formatterNumber.format(num)
}
