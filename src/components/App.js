import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  openCard,
  compareOpened,
  setMatched,
  winHandler,
  shuffleCards
} from '../redux/actionCreators';
import { Container } from '@material-ui/core';
import { useStyles } from './styles/styled';
import Cards from './Cards';
import WinMessage from './WinMessage';

function App() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  const compare = useSelector(state => state.compare);
  const isWin = useSelector(state => state.isWin);

  const classes = useStyles();

  const handleClick = id => {
    const clickedCard = cards.find(el => el.id === id);
    if (clickedCard.isOpen) {
      return;
    }
    dispatch(openCard(id));
    dispatch(compareOpened(clickedCard));
  };

  useEffect(() => {
    if (compare.length === 2) {
      const [a, b] = compare;
      const isEqual = a.value === b.value;

      if (isEqual) {
        setTimeout(() => {
          dispatch(setMatched(a.id));
          dispatch(setMatched(b.id));
        }, 300);
      } else {
        setTimeout(() => {
          dispatch(openCard(a.id));
          dispatch(openCard(b.id));
        }, 300);
      }
    dispatch(compareOpened([]));
    }
  }, [compare, dispatch, cards]);

  useEffect(() => {
    const matched = cards.filter(el => !el.isMatch);
      if (!matched.length) {
        dispatch(winHandler(true));
      }
  }, [cards, dispatch]);

  const retryGame = () => {
    dispatch(winHandler(false));
    dispatch(shuffleCards());
  };

  return (
      <Container className={classes.table}>
        {isWin ? <WinMessage onRetryGame={ retryGame } /> : <Cards handleClick={ handleClick } /> }
      </Container>
  );
};

export default React.memo(App)
