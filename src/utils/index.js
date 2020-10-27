import CARDS from '../consts';

export function shuffle() {
  const shuffled = CARDS.sort(() => Math.round(Math.random() * 2) - 1);
  return shuffled;
};
