import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import express from 'express';

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

    server.middlewares.use('/cdn/', express.static("./games/"));
    return () => server.middlewares.use('/uv/', express.static(uvPath));
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), setupProxy],
});