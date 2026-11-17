import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    // 部署路径，默认为根路径；可通过 .env.production 中的 VITE_BASE 覆盖
    base: env.VITE_BASE || '/',
    build: {
      // 统一输出到根目录 release/app/react18
      outDir: resolve(__dirname, '../../dist'),
      // 清空目标目录（独立子目录，互不干扰）
      emptyOutDir: true,
    },
    server: {
      port: 4001,
    }
  }
})
