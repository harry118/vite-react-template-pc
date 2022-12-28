import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: ['APP_'],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@store': resolve(__dirname, 'src/store'),
      '@router': resolve(__dirname, 'src/router'),
      '@types': resolve(__dirname, 'src/types'),
      '@': resolve(__dirname, 'src'),
    },
  },
});
