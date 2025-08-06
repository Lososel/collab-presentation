import pool from '../config/db.js';

export async function createUser(
  nickname: string,
  socketId: string,
  presentationId: string,
  role: string
) {
  const result = await pool.query(
    `INSERT INTO users (nickname, socket_id, presentation_id, role, last_seen)
     VALUES ($1, $2, $3, $4, NOW())
     RETURNING *`,
    [nickname, socketId, presentationId, role]
  );
  return result.rows[0];
}

export async function getUserByNickname(nickname: string) {
  const result = await pool.query('SELECT * FROM users WHERE nickname = $1', [nickname]);
  return result.rows[0];
}

export async function updateUserLastSeen(nickname: string) {
  await pool.query('UPDATE users SET last_seen = NOW() WHERE nickname = $1', [nickname]);
}

export async function deleteUserBySocketId(socketId: string) {
  await pool.query('DELETE FROM users WHERE socket_id = $1', [socketId]);
}
