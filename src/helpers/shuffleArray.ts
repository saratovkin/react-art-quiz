import { Picture } from '../types';

export const shuffleArray = (array: Picture[]): Picture[] => {
  return [...array].sort(() => 0.5 - Math.random());
};
