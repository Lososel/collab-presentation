import type { Request, Response } from 'express';
import * as PresentationService from '../services/presentation.service.js';

export const createPresentation = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const presentation = await PresentationService.createPresentation(title);
    res.status(201).json(presentation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create presentation' });
  }
};

export const getPresentations = async (_req: Request, res: Response) => {
  try {
    const presentations = await PresentationService.getAllPresentations();
    res.json(presentations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch presentations' });
  }
};
