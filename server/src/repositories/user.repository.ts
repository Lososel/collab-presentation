import * as UserModel from '../models/user.model.js';

export const createUser = async (
  nickname: string,
  socketId: string,
  presentationId: string,
  role: string = 'viewer'
) => {
  return await UserModel.createUser(nickname, socketId, presentationId, role);
};

export const getUserByNickname = async (nickname: string) => {
  return await UserModel.getUserByNickname(nickname);
};

export const updateUserLastSeen = async (nickname: string) => {
  await UserModel.updateUserLastSeen(nickname);
};

export const deleteUserBySocketId = async (socketId: string) => {
  await UserModel.deleteUserBySocketId(socketId);
};
