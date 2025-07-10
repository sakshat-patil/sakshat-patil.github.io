import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/sakshat-patil.github.io/', // Comment out for root deployment
  plugins: [react()],
})
