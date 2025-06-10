import { defineConfig } from 'vite'; // Esta linha aqui
import react from '@vitejs/plugin-react'; // E esta linha aqui

export default defineConfig({ // E então o objeto de configuração começa aqui
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist'
  }
});
