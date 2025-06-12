import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Tentativa de especificar o nome do arquivo de forma mais direta
        // 'index' ou 'main' geralmente funcionam, mas vamos ser explícitos
        app: path.resolve(__dirname, 'index.html'), // Alterado de 'main' para 'app' ou 'index' se preferir
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
