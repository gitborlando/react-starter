import react from '@vitejs/plugin-react-swc'
import path from 'path'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    autoImport({
      include: [/\.[tj]sx?$/],
      imports: [
        'react',
        'mobx',
        'mobx-react-lite',
        {
          'src/assets/assets': ['Assets'],
          '@gitborlando/widget': ['Flex'],
        },
        {
          from: 'react',
          imports: ['FC'],
          type: true,
        },
      ],
    }),
  ],

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
