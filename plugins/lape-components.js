/* global defineNuxtPlugin */
import LapeComponents from '@lape/components'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(LapeComponents)
})
