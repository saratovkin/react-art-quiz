import { Picture } from '../types';
import { shuffleArray } from './shuffleArray';

export const getRandomAnswers = (current: Picture, other: Picture[]) => {
  const uniqueAnswers = other.filter((v, i, a) => a.indexOf(v) === i);
  console.log(uniqueAnswers);
  const possibleAnswers = shuffleArray(other.filter((ans) => ans.author !== current.author));
  console.log(possibleAnswers);
  return shuffleArray([current, ...possibleAnswers.slice(0, 3)]);
};
