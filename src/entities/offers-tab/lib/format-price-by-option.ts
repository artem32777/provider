import type { PricingOption } from '../model/types'
import { formatRUB } from '~/src/shared/lib/format/number/format-currency'

export const formatPriceByOption = (price: number, activePriceOption: PricingOption['key'] = 'month') => {
	switch (activePriceOption) {
		case 'hour':
			return formatRUB(Math.ceil(price / 30 / 24))
		case 'day':
			return formatRUB(Math.ceil(price / 30))
		default:
			return formatRUB(price)
	}
}
