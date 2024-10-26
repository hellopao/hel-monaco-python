import { defineConfig } from "vite";
import pkg from './package.json';

export default defineConfig(({ mode }) => {
  return {
    base:  mode === 'development' ? '/' : `https://cdn.jsdelivr.net/npm/${pkg.name}@${pkg.version}/hel_dist/`,
    server: {
      port: 8175
    },
    build: {
      outDir: 'hel_dist'
    }
  }
});
