import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://123-edwin.github.io/CRM/",
  resolve: {
    alias: {
      '@c': path.resolve(__dirname, './src/components'),
      '@p': path.resolve(__dirname, './src/pages'),
      '@s': path.resolve(__dirname, './src/services'),
    }
  }
});
