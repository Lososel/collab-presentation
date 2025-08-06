import * as PresentationRepo from '../repositories/presentation.repository.js';

export const createPresentation = (title: string) => {
  return PresentationRepo.createPresentation(title);
};

export const getPresentationById = (id: string) => {
  return PresentationRepo.getPresentationById(id);
};

export const getAllPresentations = () => {
  return PresentationRepo.getAllPresentations();
};
