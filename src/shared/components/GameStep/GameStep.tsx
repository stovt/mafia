import React from 'react';
import { Box } from '@material-ui/core';
import { useGameContext } from 'shared/context/GameContext';
import MembersTable from 'shared/components/MembersTable';
import VotesForm from 'shared/components/VotesForm';
import ChoosesForm from 'shared/components/ChoosesForm';
import GameMessages from 'shared/components/GameMessages';

const GameStep = () => {
  const { gameTime } = useGameContext();

  return (
    <Box>
      <Box mb={2}>
        <MembersTable />
      </Box>
      {gameTime === 'day' && <VotesForm />}
      {gameTime === 'night' && <ChoosesForm />}
      <GameMessages />
    </Box>
  );
};

export default GameStep;
