# Shared Vue components example

### High points

Sample app is a minimal Nuxt app. All the code is in `./app.vue`.

The components are in a package called `@lape/components` within a npm
workspace at `./workspaces/components`.

The components package doesn't currently pull in any dependencies of its own
but relies on the parent app to compile components. This approach is
unrealistic, but helpful because this repo is focused on the integration
between Vue and the components. Besides, bundlers are a dime a dozen these
days. 😄

Start a discussion! Let me know what you think.

### Next steps

You can publish the package from this workspace to npm, but you'll need to make
a few changes to improve its portability. Instead of shipping raw `.vue` files
we can use a bundler to generate a pure js entrypoint. I recommend `parcel` as
a simple, batteries included bundler, but you could also go with something
popular in the Vue community such as `vite`. Then you need to change
`package.json#main` to point to your compiled bundle, something like
`./dist/index.js`.

### Links

- Check this out for a guided tour https://zellwk.com/blog/publish-to-npm/
- Log into npm https://docs.npmjs.com/cli/v8/commands/npm-adduser
- Publish a package https://docs.npmjs.com/cli/v8/commands/npm-publish
- Take a look at what files are included in your package https://docs.npmjs.com/cli/v8/commands/npm-publish#files-included-in-package

---

# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
