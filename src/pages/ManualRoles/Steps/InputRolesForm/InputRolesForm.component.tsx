import React from 'react';
import { Form, FormikProps, FieldArray } from 'formik';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  MenuItem,
  IconButton,
  Button,
  Box
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { ROLES } from 'shared/constants';
import SelectField from 'shared/components/SelectField';
import { INITIAL_VALUES } from './InputRolesForm.constants';

const InputRolesForm: React.FC<FormikProps<typeof INITIAL_VALUES>> = ({
  handleSubmit,
  values: { gameMembers }
}) => (
  <Form onSubmit={handleSubmit}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Роль</TableCell>
            <TableCell>Дія</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <FieldArray
            name='gameMembers'
            render={arrayHelpers => (
              <>
                {gameMembers.map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <SelectField
                        id={`gameMembers.${index}`}
                        name={`gameMembers.${index}`}
                        label='Роль'
                        options={Object.values(ROLES).map(role => (
                          <MenuItem value={role} key={role}>
                            {role}
                          </MenuItem>
                        ))}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton color='secondary' onClick={() => arrayHelpers.remove(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell align='center' colSpan={3}>
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<AddIcon />}
                      onClick={() => arrayHelpers.push(ROLES.PIECE)}
                    >
                      Додати роль
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            )}
          />
        </TableBody>
      </Table>
    </TableContainer>

    <Box textAlign='center' my={2}>
      <Button type='submit' variant='contained' color='primary'>
        Почати гру
      </Button>
    </Box>
  </Form>
);

export default InputRolesForm;
