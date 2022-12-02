import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { ButtonGroup, Button } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ComplaintItem({ complaint }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {complaint.complain_title}
      </TableCell>
      <TableCell>{complaint.complain_summary}</TableCell>
      <TableCell align="center">{complaint.createdDate}</TableCell>
      <TableCell align="center">{complaint.isSolved ? 'Closed' : 'Open'}</TableCell>
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
