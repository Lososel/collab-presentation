import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { handleUserSocket } from './sockets/user.socket.js';
import AppRouter from './routes/AppRouter.js'
import presentationRoutes from './routes/presentation.routes.js';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());
app.use('/', AppRouter)
app.use('/api/presentations', presentationRoutes);

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);
  handleUserSocket(io, socket);
});

const PORT = process.env.PORT || 5005;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
