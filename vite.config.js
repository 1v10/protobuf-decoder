import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'dist'  // 添加这一行
  },
  plugins: [react()],
  test: {
    environment: 'jsdom'
  }
})
