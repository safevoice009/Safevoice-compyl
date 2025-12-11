import { Plugin } from 'vite';
import { IncomingMessage, ServerResponse } from 'http';

const setSecurityHeaders = (_req: IncomingMessage, res: ServerResponse, next: () => void) => {
  res.setHeader('Content-Security-Policy', "default-src 'self';");
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
};

export default function securityHeaders(): Plugin {
  return {
    name: 'security-headers',
    configureServer(server) {
      server.middlewares.use(setSecurityHeaders);
    },
    configurePreviewServer(server) {
      server.middlewares.use(setSecurityHeaders);
    },
  };
}
