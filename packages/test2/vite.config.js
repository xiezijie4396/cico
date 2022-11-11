import { defineConfig } from "vite";
import { resolve } from 'path'

export const config = {
  define: {
    'process.env': {} // 修复vite自身的bug
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'test2',
      formats: ['es', 'umd', 'iife']
    },
    outDir: './dist'
  }
}

export default defineConfig(config)