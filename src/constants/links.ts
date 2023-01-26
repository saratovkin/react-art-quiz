import PATH from './path';

const LINKS = [
  {
    to: PATH.home,
    title: 'Домой',
  },
  {
    to: PATH.artistQuiz,
    title: 'Художники',
  },
  {
    to: PATH.picturesQuiz,
    title: 'Картины',
  },
  {
    to: PATH.blitzQuiz,
    title: 'Блитц',
  },
  {
    to: PATH.settings,
    title: 'Настройки',
  },
  {
    to: PATH.about,
    title: 'Информация',
  },
];

const HOMEPAGE_LINKS = [
  {
    to: PATH.artistQuiz,
    title: 'Художники',
  },
  {
    to: PATH.picturesQuiz,
    title: 'Картины',
  },
  {
    to: PATH.blitzQuiz,
    title: 'Блитц',
  },
];

export { LINKS, HOMEPAGE_LINKS };
