// server/middleware/proxy.ts
import { createProxyMiddleware } from 'http-proxy-middleware';
import type { RequestHandler } from 'express';

const proxy: RequestHandler = createProxyMiddleware({
  target: 'https://royaloceanyachts.com',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});

export default proxy;
