import * as UserRepo from '../repositories/user.repository.js';

export const connectUser = async (nickname: string, socketId: string, presentationId: string) => {
  const existing = await UserRepo.getUserByNickname(nickname);

  if (existing) {
    await UserRepo.deleteUserBySocketId(existing.socket_id);
  }

  const user = await UserRepo.createUser(nickname, socketId, presentationId, 'viewer');
  return user;
};

export const disconnectUser = async (socketId: string) => {
  await UserRepo.deleteUserBySocketId(socketId);
};

export const updateLastSeen = async (nickname: string) => {
  await UserRepo.updateUserLastSeen(nickname);
};
