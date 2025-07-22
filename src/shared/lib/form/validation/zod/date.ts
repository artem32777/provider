import { date, preprocess } from 'zod'
import type { ZodRawShape } from 'zod'
import type { CalendarDate } from '@internationalized/date'
import { ValidationMessages } from '../messages'
import { isCalendarDate } from '~/src/shared/lib/check-type/is-calendar-date'
import type {
	ZodObjectRefineSettings,
	RequiredZodObjectRefinePayload,
	ZodContextObject,
	ZodObjectRefineArgs,
} from '~/src/shared/lib/form/validation/zod/types'

function isAfterNow(date: Date) {
	return isAfter(date, new Date())
}

function isAfterTodayMidnight(date: Date) {
	return isAfter(date, getTodayMidnightDate())
}

function getTodayMidnightDate() {
	const now = new Date()

	now.setHours(0)
	now.setMinutes(0)

	return now
}

function isAfter(d1: Date, d2: Date) {
	return d1 > d2
}

function isAfterOrEqual(d1: Date, d2: Date) {
	return d1 >= d2
}

function isBefore(d1: Date, d2: Date) {
	return d1 < d2
}

function isBeforeOrEqual(d1: Date, d2: Date) {
	return d1 <= d2
}

export function dateRequired() {
	return preprocess(
		(value) => {
			if (isCalendarDate(value)) {
				return new Date((value as CalendarDate).toString())
			}

			return
		},
		date({
			required_error: ValidationMessages.REQUIRED,
		}),
	)
}

export function dateRequiredAfterNow() {
	return dateRequired().refine(isAfterNow, ValidationMessages.PAST_DATE)
}

export function dateRequiredAfterTodayMidnight() {
	return dateRequired().refine(isAfterTodayMidnight, ValidationMessages.PAST_DATE)
}

export function getDateBeforeRefine<T extends ZodRawShape>(errorParams?: ZodObjectRefineSettings): ZodObjectRefineArgs<T> {
	const key1 = errorParams?.key1 || 'startDate'

	return [
		getDatesRefineCheck(isBefore, {
			key1,
			key2: errorParams?.key2 || 'endDate',
		}),
		{
			message: errorParams?.message || ValidationMessages.START_DATE_MUST_BEFORE_END_DATE,
			path: [key1],
		},
	]
}

export function getDateBeforeOrEqualRefine<T extends ZodRawShape>(errorParams?: ZodObjectRefineSettings): ZodObjectRefineArgs<T> {
	const key1 = errorParams?.key1 || 'startDate'

	return [
		getDatesRefineCheck(isBeforeOrEqual, {
			key1,
			key2: errorParams?.key2 || 'endDate',
		}),
		{
			message: errorParams?.message || ValidationMessages.START_DATE_MUST_BEFORE_END_DATE,
			path: [key1],
		},
	]
}

export function getDateAfterRefine<T extends ZodRawShape>(errorParams?: ZodObjectRefineSettings): ZodObjectRefineArgs<T> {
	const key1 = errorParams?.key1 || 'endDate'

	return [
		getDatesRefineCheck(isAfter, {
			key1,
			key2: errorParams?.key2 || 'startDate',
		}),
		{
			message: errorParams?.message || ValidationMessages.END_DATE_MUST_AFTER_START_DATE,
			path: [key1],
		},
	]
}

export function getDateAfterOrEqualRefine<T extends ZodRawShape>(errorParams?: ZodObjectRefineSettings): ZodObjectRefineArgs<T> {
	const key1 = errorParams?.key1 || 'endDate'

	return [
		getDatesRefineCheck(isAfterOrEqual, {
			key1,
			key2: errorParams?.key2 || 'startDate',
		}),
		{
			message: errorParams?.message || ValidationMessages.END_DATE_MUST_AFTER_START_DATE,
			path: [key1],
		},
	]
}

function getDatesRefineCheck<T extends ZodRawShape>(validator: (d1: Date, d2: Date) => boolean, keys: Pick<RequiredZodObjectRefinePayload, 'key1' | 'key2'>) {
	return (date: ZodContextObject<T>) => {
		const d1: Date | undefined = date[keys.key1]

		if (!d1) {
			return true
		}

		const d2: Date | undefined = date[keys.key2]

		if (!d2) {
			return true
		}

		return validator(d1, d2)
	}
}
