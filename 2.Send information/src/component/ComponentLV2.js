import React from 'react';
import ComponentLv3 from './ComponentLV3';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ComponentLv2 = (prop) => {
  const {navigationData,webCategoryData} = prop;


  return <div>
  {/* <p>{JSON.stringify(navigationData) }</p> */}

    

    <h2>ComponentLv2 : Navigation</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">key</TableCell>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">type</TableCell>
            <TableCell align="left">icon</TableCell>
            <TableCell align="left">navigation_id</TableCell>
            <TableCell align="left">comment</TableCell>
            <TableCell align="left">sequence</TableCell>
            <TableCell align="left">active</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {navigationData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.key}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.icon}</TableCell>
              <TableCell align="left">{row.navigation_id}</TableCell>
              <TableCell align="left">{row.comment}</TableCell>
              <TableCell align="left">{row.sequence}</TableCell>
              <TableCell align="left">{row.active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <ComponentLv3 
     webCategoryData={webCategoryData}
    />
  </div>;
};
export default ComponentLv2;
