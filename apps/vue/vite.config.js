import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    // 部署路径，默认为根路径；可通过 .env.production 中的 VITE_BASE 覆盖
    base: env.VITE_BASE || '/',
    build: {
      // 统一输出到根目录 release/app/vue
      outDir: resolve(__dirname, '../../dist'),
      emptyOutDir: true,
    },
    server: {
      port: 4003,
    }
  }
})
