import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <--- Adicione esta linha

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // <--- Alterado para '/'
  publicDir: 'public', // <--- Adicionado: Informa ao Vite onde estão os arquivos estáticos (incluindo index.html)
  build: {
    outDir: 'dist' // <--- Já estava correto
  },
  resolve: { // <--- Adicionado para resolver aliases como '@/components'
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
