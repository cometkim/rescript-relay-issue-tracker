import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rescript from '@jihchi/vite-plugin-rescript';
import { rescriptRelayVitePlugin } from 'rescript-relay-router';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    include: ['assert'],
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
  },
  plugins: [
    react(),
    rescript.default(),
    rescriptRelayVitePlugin(),
  ],
});
