import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// import css from 'vite-plugin-css';

export default defineConfig({
  base: '/phonebook-ts',
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src',
    },
  },
});
