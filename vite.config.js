import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['assert'],
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
  },
  plugins: [reactRefresh()],
});
