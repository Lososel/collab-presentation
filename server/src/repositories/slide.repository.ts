import db from '../config/db.js';
import type { Slide } from '../models/slide.model.js';

export const getSlidesByPresentationId = async (presentationId: string): Promise<Slide[]> => {
  const result = await db.query(
    'SELECT * FROM slides WHERE presentation_id = $1 ORDER BY position',
    [presentationId]
  );
  return result.rows;
};

export const createSlide = async (
  presentationId: string,
  content = '',
  position: number
): Promise<Slide> => {
  const result = await db.query(
    'INSERT INTO slides (presentation_id, content, position) VALUES ($1, $2, $3) RETURNING *',
    [presentationId, content, position]
  );
  return result.rows[0];
};

export const deleteSlide = async (slideId: string): Promise<void> => {
  await db.query('DELETE FROM slides WHERE id = $1', [slideId]);
};

export const updateSlideContent = async (slideId: string, content: string): Promise<Slide> => {
  const result = await db.query('UPDATE slides SET content = $1 WHERE id = $2 RETURNING *', [
    content,
    slideId,
  ]);
  return result.rows[0];
};

export const updateSlidePosition = async (slideId: string, position: number): Promise<Slide> => {
  const result = await db.query('UPDATE slides SET position = $1 WHERE id = $2 RETURNING *', [
    position,
    slideId,
  ]);
  return result.rows[0];
};
