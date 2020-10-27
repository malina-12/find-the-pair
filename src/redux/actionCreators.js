export const openCard = id => ({
  type: 'OPEN_CARD',
  id,
});

export const compareOpened = payload => ({
  type: 'COMPARE_OPENED',
  payload,
});

export const setMatched = id => ({
  type: 'SET_MATCHED',
  id,
});

export const winHandler = payload => ({
  type: 'WIN',
  payload,
});

export const shuffleCards = payload => ({
  type: 'SHUFFLE_CARDS',
  payload,
});
