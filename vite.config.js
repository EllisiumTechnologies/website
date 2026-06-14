import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  // Fast Refresh can conflict with strict CSP policies that block eval/new Function.
  plugins: [react({ fastRefresh: false }), tailwindcss()],
})
