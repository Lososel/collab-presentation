import { Server, Socket } from 'socket.io';
import * as UserService from '../services/user.service.js';

export const handleUserSocket = (io: Server, socket: Socket) => {
  socket.on('user:join', async ({ nickname, presentationId }) => {
    try {
      const user = await UserService.connectUser(nickname, socket.id, presentationId);
      console.log(`User ${nickname} joined presentation ${presentationId}`);

      socket.emit('user:joined', { user });

      socket.join(presentationId);
      socket.to(presentationId).emit('user:connected', { user });
    } catch (err) {
      console.error('Error connecting user:', err);
      socket.emit('user:error', { message: 'Failed to join presentation' });
    }
  });

  socket.on('disconnect', async () => {
    try {
      await UserService.disconnectUser(socket.id);
      console.log(`Socket disconnected: ${socket.id}`);
    } catch (err) {
      console.error('Error on disconnect:', err);
    }
  });
};
