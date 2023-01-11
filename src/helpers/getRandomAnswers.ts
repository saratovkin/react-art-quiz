import { Picture } from '../types';
import { shuffleArray } from './shuffleArray';

export const getRandomAnswers = (current: Picture, other: Picture[]) => {
  const possibleAnswers = shuffleArray(other.filter((ans) => ans.author !== current.author));
  return shuffleArray([current, ...possibleAnswers.slice(0, 3)]);
};
