import createApplication from 'express';
import serveIndex from 'serve-index';
import serveStatic from 'serve-static';
import Corrosion from 'corrosion';
import createBareServer from '@tomphttp/bare-server-node';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import { fileURLToPath } from 'url'
import path from 'node:path';
import http from 'node:http';

const bare = createBareServer('/bare/');
const corrosion = new Corrosion({
    codec: 'xor',
    prefix: '/corrosion/',
    title: 'Amethyst'
});
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = createApplication();

app.use(serveStatic('./dist'));

app.use('/uv/', serveStatic(uvPath));

app.use('/cdn', serveStatic('./gsource'), serveIndex('./gsource', { icons: true }));

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const server = http.createServer();

server.on("request", (req, res) => {
    if(bare.shouldRoute(req)) return bare.routeRequest(req, res);
    if(req.url.startsWith(corrosion.prefix)) return corrosion.request(req, res);
    app(req, res);
});

server.on("upgrade", (req, socket, head) => {
    if(bare.shouldRoute(req)) return bare.routeUpgrade(req, socket, head);
    if(req.url.startsWith(corrosion.prefix)) return corrosion.upgrade(req, socket, head);
    socket.end();
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Listening on port ${address.port}`);
});

server.listen({ port: (process.env.PORT || 8080) });