/* global defineNuxtPlugin */
import LapeComponents from '@lape/components'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LapeComponents)
})
