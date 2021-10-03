import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  usertype: number,
  userId: number,
  phone: number,
  designation: number,
  email: string,
) {
  return { name, usertype, userId, phone, designation, email };
}

const rows = [
  createData('name', 159, 6.0, 24, 4.0, ''),
  createData('usertype', 237, 9.0, 37, 4.3, ''),
  createData('userId', 262, 16.0, 24, 6.0,''),
  createData('phone', 305, 3.7, 67,4,''),
  createData('designation', 356, 16.0, 49, 3.9,''),
  createData('email', 356, 16.0, 49, 3.9,''),
  
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.userId}</TableCell>
              <TableCell align="right">{row.usertype}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}