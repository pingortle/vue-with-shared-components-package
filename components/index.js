const components = import.meta.globEager('./src/*.vue')

export default {
  async install (app, options) {
    for (const path in components) {
      const name = path.match(/(\w+)\.vue/)[1]
      app.component(name, components[path].default)
    }
  }
}
