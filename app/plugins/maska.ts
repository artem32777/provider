import { vMaska } from 'maska/vue'
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.directive('maska', vMaska)
})
