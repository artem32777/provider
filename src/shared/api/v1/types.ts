export interface BaseResponseV1 {
	code: number
	message?: string[] | string
	error: null | string
}

export interface ErrorResponseV1 extends BaseResponseV1 {
	error: string
}

export interface SuccessResponseV1<T = unknown> extends BaseResponseV1 {
	data: T
}
