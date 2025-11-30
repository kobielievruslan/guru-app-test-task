import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { RowEntity } from '../rows/row.entity';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway {
  @WebSocketServer()
  server!: Server;

  broadcastRowUpdate(row: RowEntity) {
    this.server.emit('rowUpdated', row);
  }
}
