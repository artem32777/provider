const formatterRUB = new Intl.NumberFormat('ru-Ru', {
	style: 'currency',
	currency: 'RUB',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
})

export function formatRUB(num: number): string {
	return formatterRUB.format(num)
}

export function formatRUBWithoutSpace(num: number): string {
	return formatterRUB.format(num).replace(/\s*₽/, '₽')
}

const formatterAlmostRuble = new Intl.NumberFormat('ru-Ru', {
	style: 'currency',
	currency: 'RUB',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
})

export function formatRubleAndKopecks(x: number) {
	return formatterAlmostRuble.format(x)
}
