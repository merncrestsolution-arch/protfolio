import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          three:      ['three', '@react-three/fiber', '@react-three/drei'],
          animations: ['framer-motion', 'gsap'],
          react:      ['react', 'react-dom'],
          emailjs:    ['@emailjs/browser'],
        },
      },
    },
  },
});
