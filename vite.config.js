import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import createBareServer from '@tomphttp/bare-server-node';
import express from 'express';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';

const setupProxy = {
  name: 'setup-proxy-plugin',
  async configureServer(server) {
    const bareServer = createBareServer("/bare/");

    server.middlewares.use((req, res, next) => {
      if(bareServer.shouldRoute(req)) bareServer.routeRequest(req, res); else next();
    });

    server.middlewares.use('/cdn/', express.static("./games/"));
    return () => server.middlewares.use('/uv/', express.static(uvPath));
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), setupProxy],
});