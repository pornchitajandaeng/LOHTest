import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ComponentLv3 = (prop) => {
  const {webCategoryData} = prop;
  return <div>ComponentLv3

{/* <p>{JSON.stringify(webCategoryData) }</p> */}
<h2>ComponentLV3 : webCategory</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">title_th</TableCell>
            <TableCell align="left">title_en</TableCell>
            <TableCell align="left">parent_id</TableCell>
            <TableCell align="left">link</TableCell>
            <TableCell align="left">image</TableCell>
            <TableCell align="left">status</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {webCategoryData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.title_th}</TableCell>
              <TableCell align="left">{row.title_en}</TableCell>
              <TableCell align="left">{row.parent_id}</TableCell>
              <TableCell align="left">{row.link}</TableCell>
              <TableCell align="left">{row.image}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
};
export default ComponentLv3;
