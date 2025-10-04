import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/WebFileManagementSystem/', // GitHub Pages 部署时的基础路径
  server: {
    proxy: {
      // 将所有/api/请求代理到后端服务器
      '/api': {
        target: 'http://localhost:5000', // 开发环境使用localhost
        changeOrigin: true,
        secure: false
      }
    }
  },
  // 构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
