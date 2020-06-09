import React, { useState, useCallback, useMemo } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useGameContext } from 'shared/context/GameContext';

interface Value {
  label: string;
  value: number;
}

const VotesForm = () => {
  const { gameMembers, killGameMember, setGameTime } = useGameContext();

  const [votes, setVotes] = useState<Value[]>([]);

  const handleOnChange = useCallback((event: React.ChangeEvent<{}>, values: Value[]) => {
    setVotes(values);
  }, []);

  const options = useMemo(
    () =>
      gameMembers
        .filter(gameMember => !gameMember.killed)
        .map(gameMember => ({
          label: `${gameMember.id} - ${gameMember.role}`,
          value: gameMember.id
        })),
    [gameMembers]
  );

  const handleOnVoted = useCallback(() => {
    votes.forEach(vote => {
      killGameMember(vote.value);
    });
    setGameTime('night');
  }, [votes, killGameMember, setGameTime]);

  return (
    <Box>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={option => option.label}
        getOptionSelected={(option, value) => option.value === value.value}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant='outlined'
            label='Вибір денного голосування'
            placeholder='Учасники'
          />
        )}
        onChange={handleOnChange}
        value={votes}
      />

      <Box textAlign='center' my={2}>
        <Button variant='contained' color='primary' onClick={handleOnVoted}>
          Місто засинає
        </Button>
      </Box>
    </Box>
  );
};

export default VotesForm;
