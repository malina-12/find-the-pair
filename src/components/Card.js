import React from 'react';
import { useStyles } from './styles/styled';
import { Button } from '@material-ui/core';

const Card = ({ id, value, isOpen, handleClick }) => {
  const classes = useStyles();

  return (
    <Button
      key={id}
      id={id}
      className={isOpen ? classes.opened : classes.closed}
      style={isOpen ? {background: `${value}`} : {background: '#a7eef9d4'}}
      onClick={() => handleClick(id)}
    />
  );
};

export default Card
