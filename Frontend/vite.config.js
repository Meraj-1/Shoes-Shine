import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress "Module level directives cause errors" warnings
        if (warning.message.includes('"use client"')) return;
        warn(warning);
      },
    },
  },
});
