import type { Upload } from '~/src/shared/api/types'

export function getFilesSize(files: FileList | Upload[]): number {
	const filesArray = files instanceof FileList ? Array.from(files) : files

	return filesArray.reduce((acc, file) => acc + file.size, 0)
}
