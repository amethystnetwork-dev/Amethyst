import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import serveStatic from 'serve-static';
import serveIndex from 'serve-index';

import createBareServer from '@tomphttp/bare-server-node';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import Corrosion from 'corrosion';

const setupProxy = {
  name: 'setup-proxy-plugin',
  async configureServer(server) {
    const bareServer = createBareServer("/bare/");

    const corrosion = new Corrosion({
      codec: 'xor',
      prefix: '/corrosion/',
      title: 'Amethyst'
    });

    server.middlewares.use((req, res, next) => {
      if(bareServer.shouldRoute(req)) bareServer.routeRequest(req, res); else next();
    });

    server.middlewares.use((req, res, next) => {
      if(req.url.startsWith(corrosion.prefix)) corrosion.request(req, res); else next();
    });

    server.middlewares.use('/cdn/', serveStatic('./gsource/'));
    server.middlewares.use('/cdn/', serveIndex('./gsource/', { icons: true }));
    return () => server.middlewares.use('/uv/', serveStatic(uvPath));
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), setupProxy],
});