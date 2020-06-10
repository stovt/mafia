import React, { useMemo } from 'react';
import { Form, FormikProps } from 'formik';
import { MenuItem, Button, Box } from '@material-ui/core';
import { ROLES } from 'shared/constants';
import { useGameContext } from 'shared/context/GameContext';
import SelectField from 'shared/components/SelectField';
import { INITIAL_VALUES } from './ChoosesForm.constants';

const InputRolesForm: React.FC<FormikProps<typeof INITIAL_VALUES>> = ({ handleSubmit, values }) => {
  const { gameMembers } = useGameContext();

  const bitch = useMemo(() => gameMembers.filter(gameMember => gameMember.role === ROLES.BITCH), [
    gameMembers
  ]);

  const mafiaDon = useMemo(
    () => gameMembers.filter(gameMember => gameMember.role === ROLES.MAFIA_DON),
    [gameMembers]
  );

  const mafia = useMemo(
    () =>
      gameMembers.filter(
        gameMember => gameMember.role === ROLES.MAFIA || gameMember.role === ROLES.MAFIA_DON
      ),
    [gameMembers]
  );

  const maniac = useMemo(() => gameMembers.filter(gameMember => gameMember.role === ROLES.MANIAC), [
    gameMembers
  ]);

  const doctor = useMemo(() => gameMembers.filter(gameMember => gameMember.role === ROLES.DOCTOR), [
    gameMembers
  ]);

  const security = useMemo(
    () => gameMembers.filter(gameMember => gameMember.role === ROLES.SECURITY),
    [gameMembers]
  );

  const sheriff = useMemo(
    () => gameMembers.filter(gameMember => gameMember.role === ROLES.SHERIFF),
    [gameMembers]
  );

  return (
    <Form onSubmit={handleSubmit}>
      {!!bitch.length && (
        <Box mb={2}>
          <SelectField
            id={ROLES.BITCH}
            name={ROLES.BITCH}
            label='Вибір шлюхи'
            options={gameMembers
              .filter(gameMember => !gameMember.killed && gameMember.role !== ROLES.BITCH)
              .map(gameMember => (
                <MenuItem value={gameMember.id} key={gameMember.id}>
                  {gameMember.id} - {gameMember.role}
                </MenuItem>
              ))}
            error={bitch.every(m => m.killed) ? 'Шлюха мертва' : undefined}
            disabled={bitch.every(m => m.killed)}
          />
        </Box>
      )}

      {!!mafiaDon.length && (
        <Box mb={2}>
          <SelectField
            id={ROLES.MAFIA_DON}
            name={ROLES.MAFIA_DON}
            label='Вибір дона мафії'
            options={gameMembers
              .filter(
                gameMember =>
                  !gameMember.killed &&
                  gameMember.role !== ROLES.MAFIA &&
                  gameMember.role !== ROLES.MAFIA_DON
              )
              .map(gameMember => (
                <MenuItem value={gameMember.id} key={gameMember.id}>
                  {gameMember.id} - {gameMember.role}
                </MenuItem>
              ))}
            error={mafiaDon.every(m => m.killed) ? 'Дон мафії мертвий' : undefined}
            helperText={
              mafiaDon.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === mafiaDon[0].id
                ? 'Шлюха сіла на дона мафії'
                : undefined
            }
            disabled={
              mafiaDon.every(m => m.killed) ||
              (mafiaDon.filter(m => !m.killed).length === 1 &&
                values[ROLES.BITCH] === mafiaDon[0].id)
            }
          />
        </Box>
      )}

      {!!mafia.length && (
        <Box mb={2}>
          <SelectField
            id={ROLES.MAFIA}
            name={ROLES.MAFIA}
            label='Вибір мафії'
            options={gameMembers
              .filter(
                gameMember =>
                  !gameMember.killed &&
                  gameMember.role !== ROLES.MAFIA &&
                  gameMember.role !== ROLES.MAFIA_DON
              )
              .map(gameMember => (
                <MenuItem value={gameMember.id} key={gameMember.id}>
                  {gameMember.id} - {gameMember.role}
                </MenuItem>
              ))}
            error={mafia.every(m => m.killed) ? 'Мафія мертва' : undefined}
            helperText={
              mafia.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === mafia[0].id
                ? 'Шлюха сіла на мафію'
                : undefined
            }
            disabled={
              mafia.every(m => m.killed) ||
              (mafia.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === mafia[0].id)
            }
          />
        </Box>
      )}

      {!!maniac.length && (
        <Box mb={2}>
          <SelectField
            id={ROLES.MANIAC}
            name={ROLES.MANIAC}
            label='Вибір маньяка'
            options={gameMembers
              .filter(gameMember => !gameMember.killed && gameMember.role !== ROLES.MANIAC)
              .map(gameMember => (
                <MenuItem value={gameMember.id} key={gameMember.id}>
                  {gameMember.id} - {gameMember.role}
                </MenuItem>
              ))}
            error={maniac.every(m => m.killed) ? 'Маньяк мертвий' : undefined}
            helperText={
              maniac.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === maniac[0].id
                ? 'Шлюха сіла на маньяка'
                : undefined
            }
            disabled={
              maniac.every(m => m.killed) ||
              (maniac.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === maniac[0].id)
            }
          />
        </Box>
      )}

      {!!doctor.length && (
        <Box mb={2}>
          <SelectField
            id={ROLES.DOCTOR}
            name={ROLES.DOCTOR}
            label='Вибір лікаря'
            options={gameMembers
              .filter(gameMember => !gameMember.killed)
              .map(gameMember => (
                <MenuItem value={gameMember.id} key={gameMember.id}>
                  {gameMember.id} - {gameMember.role}
                </MenuItem>
              ))}
            error={doctor.every(m => m.killed) ? 'Лікар мертвий' : undefined}
            helperText={
              doctor.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === doctor[0].id
                ? 'Шлюха сіла на лікаря'
                : undefined
            }
            disabled={
              doctor.every(m => m.killed) ||
              (doctor.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === doctor[0].id)
            }
          />
        </Box>
      )}

      {!!security.length && (
        <Box mb={2}>
          <SelectField
            id={ROLES.SECURITY}
            name={ROLES.SECURITY}
            label='Вибір тілоохоронця'
            options={gameMembers
              .filter(gameMember => !gameMember.killed && gameMember.role !== ROLES.SECURITY)
              .map(gameMember => (
                <MenuItem value={gameMember.id} key={gameMember.id}>
                  {gameMember.id} - {gameMember.role}
                </MenuItem>
              ))}
            error={security.every(m => m.killed) ? 'Тілоохоронець мертвий' : undefined}
            helperText={
              security.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === security[0].id
                ? 'Шлюха сіла на тілоохоронця'
                : undefined
            }
            disabled={
              security.every(m => m.killed) ||
              (security.filter(m => !m.killed).length === 1 &&
                values[ROLES.BITCH] === security[0].id)
            }
          />
        </Box>
      )}

      {!!sheriff.length && (
        <Box mb={2}>
          <SelectField
            id={ROLES.SHERIFF}
            name={ROLES.SHERIFF}
            label='Вибір шерифа'
            options={gameMembers
              .filter(gameMember => !gameMember.killed && gameMember.role !== ROLES.SHERIFF)
              .map(gameMember => (
                <MenuItem value={gameMember.id} key={gameMember.id}>
                  {gameMember.id} - {gameMember.role}
                </MenuItem>
              ))}
            error={sheriff.every(m => m.killed) ? 'Шериф мертвий' : undefined}
            helperText={
              sheriff.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === sheriff[0].id
                ? 'Шлюха сіла на шерифа'
                : undefined
            }
            disabled={
              sheriff.every(m => m.killed) ||
              (sheriff.filter(m => !m.killed).length === 1 && values[ROLES.BITCH] === sheriff[0].id)
            }
          />
        </Box>
      )}

      <Box textAlign='center' my={2}>
        <Button type='submit' variant='contained' color='primary'>
          Місто прокидається
        </Button>
      </Box>
    </Form>
  );
};

export default InputRolesForm;
