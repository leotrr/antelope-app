import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; // Import for the Paper component for styling.
import Typography from '@mui/material/Typography'; // Import for Typography for text styling.
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'; // Imports for table components from Material-UI.

// Function component for rendering a table of antelope data.
const AntelopeTable = ({ data }) => {
  return (
    // Box component used to center and style the container.
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 4 }}>
      {/* Typography component for the title of the table. */}
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Antelopes Overview
      </Typography>
      {/* TableContainer wrapped with Paper for additional styling like shadow. */}
      <TableContainer component={Paper} elevation={3} sx={{ bgcolor: '#D2B48C' }}> 
        {/* Table component to structure the antelope data */}
        <Table aria-label="simple table">
          {/* TableHead component for column titles. */}
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Continent</TableCell>
              <TableCell align="right">Weight (lbs)</TableCell>
              <TableCell align="right">Height (inches)</TableCell>
              <TableCell align="right">Horns</TableCell>
              <TableCell align="right">Picture</TableCell>
            </TableRow>
          </TableHead>
          {/* TableBody for data rows, populated dynamically from the data prop. */}
          <TableBody>
            {data.map((antelope) => (
              <TableRow key={antelope.name}>
                <TableCell component="th" scope="row">{antelope.name}</TableCell>
                <TableCell align="right">{antelope.continent}</TableCell>
                <TableCell align="right">{antelope.weight}</TableCell>
                <TableCell align="right">{antelope.height}</TableCell>
                <TableCell align="right">{antelope.horns}</TableCell>
                {/* TableCell for displaying an image, using inline styles for dimensions. */}
                <TableCell align="right">
                  <img src={antelope.picture} alt={antelope.name} style={{ width: '100px', height: 'auto' }}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AntelopeTable;
