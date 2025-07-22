import type { ZodRawShape } from 'zod'
import { boolean, string, object, array, number } from 'zod'
import { ValidationMessages } from '../messages'
import {
	dateRequired,
	dateRequiredAfterNow,
	dateRequiredAfterTodayMidnight,
	getDateAfterOrEqualRefine,
	getDateAfterRefine,
	getDateBeforeOrEqualRefine,
	getDateBeforeRefine,
} from './date'
import { PHONE_RU_REGEXP } from '~/src/shared/lib/regexp/phone'
import type { ZodObjectRefineSettings, ZodObjectRefineArgs } from '~/src/shared/lib/form/validation/zod/types'
import { PASSWORD_EN_REGEXP } from '~/src/shared/lib/regexp/password'

export const zodValidators = {
	required,
	booleanRequired,
	emailRequired,
	passwordRequired,
	getConfirmRefine,
	isPhoneOrEmpty,
	phoneRequired,
	requiredMinLength,
	selectValueRequired,
	selectValueArrayRequired,
	numberRequired,
	numberRequiredPositiveMinInteger,
	URLRequired,

	dateRequired,
	dateRequiredAfterNow,
	dateRequiredAfterTodayMidnight,
	getDateBeforeRefine,
	getDateAfterRefine,
	getDateBeforeOrEqualRefine,
	getDateAfterOrEqualRefine,
} as const

function required(message: string = ValidationMessages.REQUIRED) {
	return string().trim().nonempty(message)
}

function booleanRequired() {
	return boolean().refine(v => Boolean(v), ValidationMessages.REQUIRED)
}

function emailRequired() {
	return required().email(ValidationMessages.EMAIL_INVALID)
}

function passwordRequired(
	minLength: number = 6,
	message?: string,
) {
	return required(message)
		.regex(PASSWORD_EN_REGEXP, 'Недопустимые символы в пароле')
		.min(minLength, `Пароль должен содержать не менее ${minLength} символов`)
}

function getConfirmRefine<T extends ZodRawShape>(errorParams?: ZodObjectRefineSettings): ZodObjectRefineArgs<T> {
	return [
		(data) => {
			return data[errorParams?.key1 || 'password'] === data[errorParams?.key2 || 'confirmPassword']
		},
		{
			message: errorParams?.message || ValidationMessages.PASSWORD_MISMATCH,
			path: [errorParams?.key2 || 'confirmPassword'],
		},
	]
}

function isPhoneOrEmpty() {
	return string().refine(
		(value) => !value || PHONE_RU_REGEXP.test(value),
		ValidationMessages.PHONE_INVALID,
	)
}

function phoneRequired() {
	return required().regex(PHONE_RU_REGEXP, ValidationMessages.PHONE_INVALID)
}

function requiredMinLength(length: number = 8, fieldName: string = '') {
	return required().min(length, `Минимальная длина поля${fieldName ? ` ${fieldName}` : ''}: ${length}`)
}

function selectValueRequired() {
	return object({ id: string() }, {
		required_error: ValidationMessages.REQUIRED,
	})
}

function selectValueArrayRequired() {
	return array(object({ id: string() })).min(1, ValidationMessages.REQUIRED)
}

function numberRequired() {
	return number({
		message: ValidationMessages.REQUIRED,
	})
}

function numberRequiredPositiveMinInteger(min = 1) {
	return numberRequired()
		.positive('Значение должно быть положительным')
		.min(min, `Минимальное значение ${min}`)
		.int('Значение должно быть целым')
}

function URLRequired() {
	return required().url(ValidationMessages.URL_INVALID)
}
