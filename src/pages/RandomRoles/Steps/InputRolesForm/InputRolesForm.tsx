import React, { useState, useCallback } from 'react';
import { Box, Button, Chip, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ROLES } from 'shared/constants';
import { shuffleArray } from 'shared/helpers';
import { useGameContext } from 'shared/context/GameContext';

interface InputRolesFormProps {
  goToNextStep: () => void;
}

const InputRolesForm: React.FC<InputRolesFormProps> = ({ goToNextStep }) => {
  const { setGameMembers } = useGameContext();

  const [members, setMembers] = useState([
    ROLES.BITCH,
    ROLES.MAFIA_DON,
    ROLES.MAFIA,
    ROLES.MANIAC,
    ROLES.DOCTOR,
    ROLES.SHERIFF,
    ...Array(4).fill(ROLES.PIECE)
  ]);

  const handleOnChangeMembers = useCallback((event: React.ChangeEvent<{}>, values: string[]) => {
    setMembers(values);
  }, []);

  const handleOnSubmit = useCallback(() => {
    const shuffledMembers: Array<typeof ROLES[keyof typeof ROLES]> = shuffleArray(members);

    setGameMembers(
      shuffledMembers.map((gameMember, index) => ({
        id: index + 1,
        role: gameMember,
        killed: false
      }))
    );
    goToNextStep();
  }, [members, goToNextStep, setGameMembers]);

  return (
    <Box>
      <Autocomplete
        multiple
        freeSolo
        options={Object.values(ROLES)}
        getOptionLabel={option => option}
        getOptionSelected={() => false}
        renderTags={
          (val, getTagProps) =>
            val.map((option, index) => (
              <Chip variant='outlined' label={option} {...getTagProps({ index })} />
            ))
          // eslint-disable-next-line react/jsx-curly-newline
        }
        renderInput={params => (
          <TextField {...params} variant='outlined' label='Ролі' placeholder='Нова роль' />
        )}
        onChange={handleOnChangeMembers}
        value={members}
      />

      <Box textAlign='center' my={2}>
        <Button variant='contained' color='primary' onClick={handleOnSubmit}>
          Почати гру
        </Button>
      </Box>
    </Box>
  );
};

export default InputRolesForm;
