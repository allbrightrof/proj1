import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/proj1/', //  Add this line (must match your repo name)
  plugins: [
    tailwindcss(),
    react(),
  ],
})
