import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/HealthyGameMainpage/', 
  plugins: [react()]
})

