import { httpServer } from './http_server/server';
import { createWebSocketStream, WebSocket, WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';
import { RCCommands, HTTP_PORT, WEBSOCKET_PORT } from './websocket/const';
import { prepareToWrite } from './websocket/helpers';

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Start websocket on the ${WEBSOCKET_PORT} port!`);

const wsServer = new WebSocketServer({ port: WEBSOCKET_PORT });

wsServer.on('connection', (ws: WebSocket, request: IncomingMessage) => {
  console.log(`Connected on the ${request.socket.remotePort} remote port!`);

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (message) => {
    console.log('Message received:', message);

    const [command, ...args] = message.split(' ');

    try {
      const operation = RCCommands[command as keyof typeof RCCommands];
      if (!operation) throw Error(`Unknown command '${command}'`);
      const result = await operation(args);

      // console.log(`Run '${command}' success with result '${result}'`);

      duplex.write(prepareToWrite(`${command} ${result}`));
    } catch (error) {
      console.log(`Run '${command}' failed with error '${error}'`);

      duplex.write(prepareToWrite(`${error}`));
    }
  });

  ws.on('close', () => {
    console.log(`Connection closed`);
  });
});

process.on('SIGINT', () => {
  wsServer.close();
  process.exit();
});
