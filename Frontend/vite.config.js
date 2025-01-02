import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is correct
    assetsDir: 'assets', // Organizes static assets
  },
  server: {
    port: 3000,
    strictPort: true, // Avoid conflicts
  },
  resolve: {
    alias: {
      '@': '/src', // Adjust to your project structure
    },
  },
});
