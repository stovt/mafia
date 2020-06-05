import React, { useState, useCallback } from 'react';
import {
  Container,
  Box,
  TextField,
  Chip,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteChangeDetails
} from '@material-ui/lab/Autocomplete';

const MAFIA = 'Мафія';
const DOCTOR = 'Лікар';
const SHERIFF = 'Шериф';
const BITCH = 'Шлюха';
const TERRORIST = 'Терорист';
const SECURITY = 'Телохранітель';
const PIECE = 'Мирний';

const ROLES = [MAFIA, DOCTOR, SHERIFF, BITCH, TERRORIST, SECURITY, PIECE];
const INITIAL_VALUE = [
  ...Array(2).fill(MAFIA),
  DOCTOR,
  SHERIFF,
  BITCH,
  TERRORIST,
  SECURITY,
  ...Array(3).fill(PIECE)
];

const shuffleArray = (arr: any[]) =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const App = () => {
  const [value, setValue] = useState(INITIAL_VALUE);

  const [chooses, setChooses] = useState({
    bitch: '',
    mafia: '',
    doctor: '',
    security: '',
    sheriff: ''
  });

  const [shuffledValue, setShuffledValue] = useState<string[]>([]);

  const handleOnChange = useCallback(
    (
      event: React.ChangeEvent<{}>,
      val: string[],
      reason: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<string>
    ) => {
      if (details?.option) {
        switch (reason) {
          case 'create-option':
            setValue(values => [...values, details.option]);
            break;
          case 'remove-option':
            setValue(values => [
              ...values.slice(0, values.indexOf(details.option)),
              ...values.slice(values.indexOf(details.option) + 1)
            ]);
            break;
          case 'select-option':
            setValue(values => [...values, details.option]);
            break;
          default:
            break;
        }
      }
    },
    []
  );

  const handleOnGenerate = useCallback(() => {
    const shuffled = shuffleArray(value);

    setShuffledValue(shuffled);

    setChooses({
      bitch: '',
      mafia: '',
      doctor: '',
      security: '',
      sheriff: ''
    });
  }, [value]);

  const handleOnChangeChoose = useCallback(
    (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const { name } = event.target;

      if (name) {
        setChooses(values => ({
          ...values,
          [name]: event.target.value
        }));
      }
    },
    []
  );

  return (
    <Container component='main' maxWidth='sm'>
      <Box py={{ xs: 2, sm: 3 }}>
        <Box mb={4}>
          <Autocomplete
            multiple
            freeSolo
            options={ROLES}
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
            onChange={handleOnChange}
            value={value}
          />
        </Box>

        <Box textAlign='center' mb={4}>
          <Button color='primary' variant='contained' onClick={handleOnGenerate}>
            Згенерувати
          </Button>
        </Box>

        {!!shuffledValue.length && (
          <Box>
            <Box mb={4}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>№</TableCell>
                      <TableCell>Роль</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {shuffledValue.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{row}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {shuffledValue.includes(BITCH) && (
              <Box mb={3}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='bitch'>Вибір шлюхи</InputLabel>
                  <Select
                    label='Вибір шлюхи'
                    name='bitch'
                    value={chooses.bitch}
                    onChange={handleOnChangeChoose}
                  >
                    <MenuItem value=''>
                      <em>Ніякий</em>
                    </MenuItem>
                    {shuffledValue.map((val, i) =>
                      val === BITCH ? null : (
                        <MenuItem value={i} key={i}>
                          {i + 1} - {val}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Box>
            )}

            {shuffledValue.includes(MAFIA) && (
              <Box mb={3}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='mafia'>Вибір мафії</InputLabel>
                  <Select
                    label='Вибір мафії'
                    name='mafia'
                    value={chooses.mafia}
                    onChange={handleOnChangeChoose}
                  >
                    <MenuItem value=''>
                      <em>Ніякий</em>
                    </MenuItem>
                    {shuffledValue.map((val, i) =>
                      val === MAFIA || val === TERRORIST ? null : (
                        <MenuItem value={i} key={i}>
                          {i + 1} - {val}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Box>
            )}

            {shuffledValue.includes(DOCTOR) && (
              <Box mb={3}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='doctor'>Вибір лікаря</InputLabel>
                  <Select
                    label='Вибір лікаря'
                    name='doctor'
                    value={chooses.doctor}
                    onChange={handleOnChangeChoose}
                  >
                    <MenuItem value=''>
                      <em>Ніякий</em>
                    </MenuItem>
                    {shuffledValue.map((val, i) =>
                      val === DOCTOR ? null : (
                        <MenuItem value={i} key={i}>
                          {i + 1} - {val}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Box>
            )}

            {shuffledValue.includes(SECURITY) && (
              <Box mb={3}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='security'>Вибір телохранітеля</InputLabel>
                  <Select
                    label='Вибір телохранітеля'
                    name='security'
                    value={chooses.security}
                    onChange={handleOnChangeChoose}
                  >
                    <MenuItem value=''>
                      <em>Ніякий</em>
                    </MenuItem>
                    {shuffledValue.map((val, i) =>
                      val === SECURITY ? null : (
                        <MenuItem value={i} key={i}>
                          {i + 1} - {val}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Box>
            )}

            {shuffledValue.includes(SHERIFF) && (
              <Box mb={3}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='sheriff'>Вибір шерифа</InputLabel>
                  <Select
                    label='Вибір шерифа'
                    name='sheriff'
                    value={chooses.sheriff}
                    onChange={handleOnChangeChoose}
                  >
                    <MenuItem value=''>
                      <em>Ніякий</em>
                    </MenuItem>
                    {shuffledValue.map((val, i) =>
                      val === SHERIFF ? null : (
                        <MenuItem value={i} key={i}>
                          {i + 1} - {val}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default App;
