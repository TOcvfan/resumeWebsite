import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@/lib/mui';
import { Title } from '$/Components';
import { fredericka } from '$/fonts';

export default function Tables({ rows, columns }) {

  return (
    <Paper sx={{ width: '95%', overflow: 'hidden', background: 'transparent', color: '#e1c043' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  sx={{ background: '#e1c043', color: 'blue' }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} sx={{ color: '#e1c043', textShadow: '-1px 1px 1px black' }}><Title className={fredericka.className} color='#e1c043' size={10}>
                        {column.id === 'code' ? <img src={`https://www.countryflagicons.com/FLAT/32/${row.code}.png`} width={24} alt={row.code} /> : (column.format && typeof value === 'number'
                          ? column.format(value)
                          : value)}</Title>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </Paper>
  );
}