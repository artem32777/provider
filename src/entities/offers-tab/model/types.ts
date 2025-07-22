export interface OfferItem {
	id: number
	task: string
	ourPrice: number
	othersPrice: number
	cpu: string
	core: string
	ram: string
	storage: string
}

export const PRICING_TYPES = {
	month: 'месяц',
	day: 'день',
	hour: 'час',
} as const

export interface PricingOption {
	key: keyof typeof PRICING_TYPES
	value: string
}
