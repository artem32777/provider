import type { CalendarDate } from '@internationalized/date'

export function isCalendarDate(value: unknown): value is CalendarDate {
	return value !== null && typeof value === 'object' && 'toString' in value
}
