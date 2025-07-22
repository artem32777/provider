import type { baseObjectOutputType, CustomErrorParams, objectUtil, ZodRawShape } from 'zod'

export type ZodContextObject<T extends ZodRawShape = ZodRawShape> = {
	[k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T>>]: objectUtil.addQuestionMarks<baseObjectOutputType<T>>[k]
}

export type ZodObjectRefineArgs<T extends ZodRawShape> = [
	(data: ZodContextObject<T>) => boolean,
	CustomErrorParams,
]

export interface ZodObjectRefineSettings {
	message?: string
	key1?: string
	key2?: string
}

export type RequiredZodObjectRefinePayload = Required<ZodObjectRefineSettings>
