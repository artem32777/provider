import type { FetchResponse } from 'ofetch'
import type { ErrorResponseV1 } from './v1/types'
import { IS_PRODUCTION } from '~/src/shared/config'

interface AuthError {
	url: `/_auth/local/${string}`
	statusCode: number
	statusMessage: string
	message: string
	stack: string
	data: ErrorResponseV1
}

type FetchErrorData = ErrorResponseV1 | AuthError

interface FetchError {
	data: FetchErrorData
	response: FetchResponse<FetchErrorData>
}

function isAuthError(value: FetchErrorData): value is AuthError {
	return Boolean('url' in value && value.url.startsWith('/_auth/local'))
}

export function throwApiError(error: FetchError) {
	if (import.meta.server && IS_PRODUCTION) {
		console.log('throwApiError: ')
		console.dir(error)
	}

	let data: ErrorResponseV1

	if (isAuthError(error.data)) {
		data = error.data.data
	} else {
		data = error.data
	}

	let message = data?.message

	if (Array.isArray(message)) {
		message = message.join('. ')
	} else if (!message) {
		message = data?.error
	}

	throw new Error(message || 'Oops...')
}
