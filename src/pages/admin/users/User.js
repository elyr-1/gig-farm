import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { ButtonGroup, Button } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function User({ row }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.calories}</TableCell>
      <TableCell align="center">{row.fat}</TableCell>
      <TableCell align="center">{row.carbs}</TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Button variant="contained" color="secondary" startIcon={<AutoFixHighIcon />}>
            UPDATE
          </Button>
          <Button variant="contained" color="error" startIcon={<DeleteForeverIcon />}>
            DELETE
          </Button>
        </ButtonGroup>
      </TableCell>
    </>
  );
}
