# unplugin-vue-sfc-name

[![NPM version](https://img.shields.io/npm/v/unplugin-vue-sfc-name?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue-sfc-name)

## Feature 

- support name
- support inheritAttrs
- precise breakpoints
- Expanded the function of automatic name generation
## Usage
### Basic example

```html
<template>
  <div>hello world {{ a }}</div>
</template>

<script lang="ts" setup name="App" inheritAttrs="false">
  const a = 1
</script>
```

## Install

```bash
npm i unplugin-vue-sfc-name
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Starter from 'unplugin-vue-sfc-name/vite'

export default defineConfig({
  plugins: [
    Starter({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Starter from 'unplugin-vue-sfc-name/rollup'

export default {
  plugins: [
    Starter({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vue-sfc-name/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-vue-sfc-name/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)
<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-sfc-name/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import Starter from 'unplugin-vue-sfc-name/esbuild'

build({
  plugins: [Starter()],
})
```

<br></details>
