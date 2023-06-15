import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
import viteAliases from 'vite-aliases';
import css from 'vite-plugin-css';

export default defineConfig({
  base: '/tweet-cards/',
  plugins: [
    react(),
    // viteAliases({
    //   dirs: [
    //     {
    //       // Аліас для папки src
    //       alias: '/@',
    //       dir: resolve(__dirname, 'src'),
    //     },
    //     // Інші аліаси, які вам потрібні
    //   ],
    // }),
  ],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },
});
