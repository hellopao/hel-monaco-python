import { defineConfig } from "vite";
import pkg from './package.json';

export default defineConfig(({ mode }) => {
  const baseURL = mode === 'development' ? '/' : `https://unpkg.com/${pkg.name}@${pkg.version}/dist/`;
  return {
    base: baseURL,
    server: {
      port: 8175
    }
  }
});
