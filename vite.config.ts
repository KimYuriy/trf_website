import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ipAddress from './src/components/network/server_ip_address';

// https://vite.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: mode === 'development'
    ? {
      proxy: {
        '/api': {
          target: ipAddress,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    }
    : {},
});