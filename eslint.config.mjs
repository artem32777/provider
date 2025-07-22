import unusedImports from 'eslint-plugin-unused-imports'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		plugins: {
			'unused-imports': unusedImports,
		},
		rules: {
			'vue/multi-word-component-names': 0,
			'vue/require-default-prop': 0,
			'vue/no-v-html': 0,
			'vue/no-multiple-template-root': 0,
			'unused-imports/no-unused-imports': 'error',
			'@stylistic/arrow-parens': 0,
			'@typescript-eslint/ban-ts-comment': 0,
			'@typescript-eslint/no-namespace': 0,
		},
	},
)
