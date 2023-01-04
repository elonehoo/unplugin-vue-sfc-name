import { defineConfig } from 'vite'
// import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-script-setup-name/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
  ],
})
