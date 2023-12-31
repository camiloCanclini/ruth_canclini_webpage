import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  //base: 'https://camilocanclini.github.io/ruth_canclini_webpage/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/custom-variables.scss";`,
      },
    }
  }
})
