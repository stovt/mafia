import React, { useState, useCallback } from 'react';
import {
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
  TableBody
} from '@material-ui/core';
import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteChangeDetails
} from '@material-ui/lab/Autocomplete';

const ROLES = ['Мафія', 'Терорист', 'Мирний', 'Шлюха', 'Шериф', 'Лікар', 'Телохранітель'];
const INITIAL_VALUE = [
  'Мафія',
  'Терорист',
  'Мирний',
  'Шлюха',
  'Шериф',
  'Лікар',
  'Мирний',
  'Мирний'
];

const shuffleArray = (arr: any[]) =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const App = () => {
  const [value, setValue] = useState(INITIAL_VALUE);
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
            setValue(values => [...values, details.option]);
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
  }, [value]);

  return (
    <Box my={5} px={3} mx='auto' maxWidth={600}>
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

      <Box textAlign='center' my={3}>
        <Button color='primary' variant='contained' onClick={handleOnGenerate}>
          Згенерувати
        </Button>
      </Box>

      {!!shuffledValue.length && (
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
      )}
    </Box>
  );
};

export default App;
