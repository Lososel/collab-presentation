import * as SlideRepo from '../repositories/slide.repository.js';

export const getSlidesByPresentationId = (presentationId: string) => {
  return SlideRepo.getSlidesByPresentationId(presentationId);
};

export const createSlide = (
  presentationId: string,
  position: number,
  content?: string
) => {
  return SlideRepo.createSlide(presentationId, content || '', position);
};

export const deleteSlide = (slideId: string) => {
  return SlideRepo.deleteSlide(slideId);
};

export const updateSlideContent = (slideId: string, content: string) => {
  return SlideRepo.updateSlideContent(slideId, content);
};

export const updateSlidePosition = (slideId: string, position: number) => {
  return SlideRepo.updateSlidePosition(slideId, position);
};
