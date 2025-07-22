import type { NavigationMenuItem } from '@nuxt/ui/components/NavigationMenu.vue'
import type { SitemapRoute } from './SitemapRoute'

export function sitemapRouteToNavigationMenuItem(item: SitemapRoute): Pick<NavigationMenuItem, 'to' | 'label'> {
	return {
		label: item.name,
		to: item.route,
	}
}
