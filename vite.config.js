import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import strip from "@rollup/plugin-strip";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    {
      ...strip({ include: '**/*.+(vue|js)' }),
       apply: 'build'
    }]
})
