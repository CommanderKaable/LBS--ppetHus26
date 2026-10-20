import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base: './' gör att alla sökvägar blir relativa, så appen fungerar på GitHub Pages
// oavsett reponamn (användarnamn.github.io/reponamn/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
