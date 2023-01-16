export type Picture = {
  author: string;
  imageNum: string;
  name: string;
  year: string;
};

export interface AnswersState {
  gameId?: number;
  questionNum: number;
  answers: Picture[];
  correctAnswer?: Picture;
  checkAnswer: (author: string) => void;
}
