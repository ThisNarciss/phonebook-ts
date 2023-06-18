import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// import css from 'vite-plugin-css';

export default defineConfig({
  base: '/goit-react-hw-08-phonebook/',
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src',
    },
  },
});
