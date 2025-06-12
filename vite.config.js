import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Certifique-se que esta linha está presente

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Definir a base do deploy. Geralmente '/' para apps SPA.
  base: '/', 

  // Onde os arquivos estáticos (como assets e o próprio index.html durante dev) são servidos.
  // É a pasta onde o Vite "procura" por arquivos que serão copiados diretamente.
  // Mantenha 'public' se você tem outros assets lá.
  publicDir: 'public', 

  build: {
    outDir: 'dist', // Diretório de saída da build
    emptyOutDir: true, // Garante que a pasta dist é limpa antes de cada build

    rollupOptions: {
      input: {
        // Define explicitamente o ponto de entrada do seu HTML
        // 'main' é o nome da entrada, e o caminho é o arquivo index.html na raiz do projeto.
        main: path.resolve(__dirname, 'index.html'), 
      },
    },
  },

  // Configurações de resolução de módulos, útil para aliases como '@/components'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
