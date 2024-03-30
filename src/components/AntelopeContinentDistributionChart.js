import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

// Defines an array of colors to be used in the PieChart.
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

// Functional component to display a pie chart of antelopes' distribution across continents.
const AntelopeContinentDistributionChart = ({ data }) => {
  // Processes the incoming data to calculate the distribution of antelopes by continent.
  const distribution = data.reduce((acc, antelope) => {
    acc[antelope.continent] = (acc[antelope.continent] || 0) + 1;
    return acc;
  }, {});

  // Converts the distribution object into an array format suitable for rendering with Recharts.
  const distributionData = Object.keys(distribution).map(key => ({ name: key, value: distribution[key] }));

  return (
    <Box sx={{
        backgroundColor: '#D2B48C', // Sets the background color of the chart container.
        padding: '16px', // Applies padding around the chart.
        margin: '16px auto', // Centers the chart container with automatic horizontal margins and adds vertical spacing.
        maxWidth: '450px', // Limits the width of the chart container for better visual presentation.
        boxShadow: 3, // Applies box shadow for a 3D effect.
      }}>
    
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="50vh">
      <PieChart width={400} height={400}>
        {/* Pie component representing the data as a pie chart, with various styling and configuration props. */}
        <Pie dataKey="value" isAnimationActive={false} data={distributionData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
          {/* Cell components to apply specific colors to each slice of the pie chart based on the COLORS array. */}
          {distributionData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* Tooltip component to display data values when hovering over chart segments. */}
        <Tooltip />
        {/* Legend component to provide a key for the chart colors and labels. */}
        <Legend />
      </PieChart>
      {/* Typography component to display a title below the chart. */}
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Antelope's distribution by continent
      </Typography>
    </Box>
    </Box>
    
  );
};

export default AntelopeContinentDistributionChart;
