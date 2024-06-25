import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jack/',
  plugins: [react()],
  build: {
    outDir: 'dist',  // Specify the output directory
    assetsDir: 'assets',  // Specify the assets directory within 'dist'
  },
})
