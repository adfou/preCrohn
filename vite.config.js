import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  base: '/', // Root path for deployment
  define: {
    global: 'window'
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
