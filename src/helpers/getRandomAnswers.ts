import { Picture } from '../types';
import { shuffleArray } from './shuffleArray';

export const getRandomAnswers = (current: Picture, other: Picture[]) => {
  const uniqueAnswers = other.filter((v, i, a) => a.findIndex((t => t.author === v.author)) === i);
  const possibleAnswers = shuffleArray(uniqueAnswers.filter((a) => a.author !== current.author));
  return shuffleArray([current, ...possibleAnswers.slice(0, 3)]);
};
