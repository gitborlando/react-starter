import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { autoImportConfig } from './auto-import'

export default defineConfig({
  plugins: [react(), autoImportConfig],

  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "src/styles/mixin.less";`,
      },
    },
  },
})
