import { Router } from 'express';
import { createPresentation, getPresentations } from '../controllers/presentation.controller.js';

const router = Router();

router.post('/', createPresentation);
router.get('/', getPresentations);

export default router;
