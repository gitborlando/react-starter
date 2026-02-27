import { miniId } from '@gitborlando/utils'
import react from '@vitejs/plugin-react-swc'
import wywInJsVite from '@wyw-in-js/vite'
import path from 'path'
import { defineConfig } from 'vite'
import { autoImportConfig } from './auto-import'

export default defineConfig({
  plugins: [
    react(),
    autoImportConfig,
    wywInJsVite({ classNameSlug: () => miniId(5) }),
  ],

  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
})
