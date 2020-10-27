import React from 'react';
import { Button, Typography } from '@material-ui/core';

const WinMessage = ({ onRetryGame }) => {
  return (
    <>
      <Typography variant="h5">
        You win! Wanna try again?
      </Typography>
      
      <Button
        variant="outlined"
        color="primary"
        onClick={onRetryGame}
      >
        Retry
      </Button>
    </>
  );
};

export default WinMessage
