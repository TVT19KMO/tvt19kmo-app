import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

export default defineConfig({
  base: '/tvt19kmo-app/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
});
