import db from '../config/db.js';
import type { Presentation } from '../models/presentation.model.js';

export const createPresentation = async (title: string): Promise<Presentation> => {
  const result = await db.query('INSERT INTO presentations (title) VALUES ($1) RETURNING *', [
    title,
  ]);
  return result.rows[0];
};

export const getPresentationById = async (id: string): Promise<Presentation | null> => {
  const result = await db.query('SELECT * FROM presentations WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const getAllPresentations = async (): Promise<Presentation[]> => {
  const result = await db.query('SELECT * FROM presentations ORDER BY created_at DESC');
  return result.rows;
};
