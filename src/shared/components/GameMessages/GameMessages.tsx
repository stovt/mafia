import React from 'react';
import Box from '@material-ui/core/Box';
import { useGameContext } from 'shared/context/GameContext';

const GameMessages = () => {
  const { gameMessages } = useGameContext();

  return (
    <>
      {gameMessages.map(gameMessage => (
        <Box
          mb={2}
          textAlign='center'
          color='primary.main'
          fontSize='h6.fontSize'
          key={gameMessage}
        >
          {gameMessage}
        </Box>
      ))}
    </>
  );
};

export default GameMessages;
