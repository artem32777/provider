export interface ResponsiveImage {
	src: string
	media: string
	type?: string
}

export function useImagePreload(images: ResponsiveImage[]) {
	const preloadLinks = images.map(image => ({
		rel: 'preload' as const,
		href: image.src,
		as: 'image' as const,
		media: image.media,
		...(image.type && { type: image.type }),
		fetchPriority: 'high' as const,
	}))

	useHead({
		link: preloadLinks,
	})
}
