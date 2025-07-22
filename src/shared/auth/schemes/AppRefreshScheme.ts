import { AppRequestHandler } from '../inc/AppRequestHandler'
import { RefreshScheme } from '#auth/runtime'

export default class AppRefreshScheme extends RefreshScheme {
	constructor(...args: ConstructorParameters<typeof RefreshScheme>) {
		super(...args)

		this.requestHandler = new AppRequestHandler(
			this,
			import.meta.server ? this.$auth.ctx.ssrContext!.event.$http : this.$auth.ctx.$http,
			args[0],
		)
	}
}
