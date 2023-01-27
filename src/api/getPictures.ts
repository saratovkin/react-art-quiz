import { Picture } from '../types';
import { default as URL } from './constants';

const getPictures = async (): Promise<Picture[] | undefined> => {
  try {
    const rawResponse = await fetch(URL);
    const pictures: Picture[] = await rawResponse.json();
    return pictures;
  } catch (e) {}
};

export default getPictures;
