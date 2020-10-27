import React from 'react';
import { useSelector } from "react-redux";
import { useStyles } from './styles/styled';
import Card from './Card';

const Cards = ({ handleClick }) => {
  const cards = useSelector(state => state.cards);
  const classes = useStyles();

  return (
    cards.map(el => {
      if (el.isMatch) {
        return (
          <div
            key={el.id}
            className={classes.match}
          />
      )} else {
        return (
          <Card
            key={el.id}
            id={el.id}
            value={el.value}
            isOpen={el.isOpen}
            handleClick={handleClick}
          />
        )}
    })
  );
};

export default Cards
