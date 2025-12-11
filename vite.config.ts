import { defineConfig } from 'vite';
import securityHeaders from './vite-plugin-security-headers';

export default defineConfig({
  plugins: [securityHeaders()],
});
