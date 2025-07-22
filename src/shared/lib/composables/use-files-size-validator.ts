import type { FileSizeUnit } from '~/src/shared/lib/format/file/types'
import { convertToBytes } from '~/src/shared/lib/format/file/convert-to-bytes'

export interface FilesSizeValidatorOptions {
	maxFileSize: number
	unit: FileSizeUnit
	currentTotalSize?: number
	maxFilesTotalSize?: number
}

export function useFilesSizeValidator(options: FilesSizeValidatorOptions) {
	let filesTotalSize: number = options.currentTotalSize || 0
	const unit: FileSizeUnit = options.unit

	const maxFileSizeInBytes: number = convertToBytes(options.maxFileSize, unit)

	const maxFilesSizeInBytes: number | null = options.maxFilesTotalSize
		? convertToBytes(options.maxFilesTotalSize, unit)
		: null

	const validateFile = (fileSize: number) => {
		if (fileSize > maxFileSizeInBytes) {
			throw new Error(`Размер файла превышает допустимый размер в ${options.maxFileSize} ${unit}.`)
		}

		if (maxFilesSizeInBytes) {
			const potentialTotalSize = filesTotalSize + fileSize

			if (potentialTotalSize > maxFilesSizeInBytes) {
				throw new Error(`Размер файлов превышает допустимый размер в ${options.maxFilesTotalSize} ${unit}.`)
			}

			filesTotalSize = potentialTotalSize
		}
	}

	const addFilesToFormData = (files: FileList, formData: FormData) => {
		Array.from(files).forEach(file => {
			validateFile(file.size)
			formData.append('files', file)
		})
	}

	return {
		addFilesToFormData,
	}
}
