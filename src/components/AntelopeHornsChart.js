import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

// Array of colors for the pie chart slices.
const COLORS = ['#D32F2F', '#1976D2', '#388E3C', '#FFA000', '#7B1FA2', '#FBC02D']

// Component to display the distribution of antelopes' horns via a pie chart.
const AntelopeHornsChart = ({ data }) => {
  // Aggregates the data by the number of horns, counting occurrences.
  const hornsDistribution = data.reduce((acc, antelope) => {
    acc[antelope.horns] = (acc[antelope.horns] || 0) + 1;
    return acc;
  }, {});

  // Transforms the distribution data into a format suitable for Recharts.
  const chartData = Object.keys(hornsDistribution).map(key => ({ name: key, value: hornsDistribution[key] }));

  return (
    // Outer box styling the chart container.
    <Box sx={{
        backgroundColor: '#D2B48C', // Background color for the chart container.
        padding: '50px', // Padding around the chart.
        margin: '16px auto', // Centering the chart container.
        maxWidth: '450px', // Maximum width for better visual presentation.
        boxShadow: 3, // Shadow for a 3D look.
      }}>
    
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="50vh">
      <PieChart width={400} height={400}>
        // Pie chart configuration with the provided data.
        <Pie dataKey="value" isAnimationActive={false} data={chartData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
          // Maps each slice of the pie chart to a specific color from the COLORS array.
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip /> // Shows a tooltip on hover with details of the slice.
        <Legend /> // Displays a legend for the chart.
      </PieChart>
     
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Antelope's horns distribution
      </Typography>
    </Box>
    </Box>
  );
};

export default AntelopeHornsChart;
