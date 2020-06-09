import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box
} from '@material-ui/core';
import { useGameContext } from 'shared/context/GameContext';

const MembersTable = () => {
  const { gameMembers } = useGameContext();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Роль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameMembers.map(gameMember => (
            <TableRow key={gameMember.id}>
              <TableCell>
                <Box color={gameMember.killed ? 'secondary.main' : 'inherit'}>{gameMember.id}</Box>
              </TableCell>
              <TableCell>
                <Box color={gameMember.killed ? 'secondary.main' : 'inherit'}>
                  {gameMember.role}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MembersTable;
