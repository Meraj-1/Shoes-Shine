import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [],
  server: {
    port: 3000,
  build: {
    outDir: 'dist',
  }},
});


// // export default defineConfig({
//   // your Vite config here
//   plugins: [],
//   server: {
//     port: 3000,
//   },
// });
