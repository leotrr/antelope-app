import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

// Defines a functional component to display the average height of antelopes by continent.
const AntelopeHeightChart = ({ data }) => {
  // Reduces the data array to an object mapping continents to their total height and antelope count.
  const continentHeights = data.reduce((acc, antelope) => {
    if (!acc[antelope.continent]) {
      acc[antelope.continent] = { totalHeight: 0, count: 0 };
    }
    acc[antelope.continent].totalHeight += antelope.height;
    acc[antelope.continent].count += 1;
    return acc;
  }, {});

  // Transforms the continentHeights object into an array suitable for the BarChart component,
  // calculating the average height for each continent.
  const chartData = Object.keys(continentHeights).map(continent => ({
    continent,
    averageHeight: continentHeights[continent].totalHeight / continentHeights[continent].count,
  }));

  return (
    <Box sx={{
        backgroundColor: '#D2B48C', // Sets the background color of the chart's container.
        padding: '50px', // Applies padding around the chart for spacing.
        margin: '16px auto', // Centers the chart container horizontally.
        maxWidth: '450px', // Restricts the maximum width of the chart container.
        boxShadow: 3, // Applies a shadow to the container for depth.
      }}>
    
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="continent" />
          <YAxis label={{ value: 'Average height (inches)', angle: -90, position: 'insideLeft', dy: 20}} />
          <Tooltip />
          <Legend />
          <Bar dataKey="averageHeight" fill="#D3D3D3" name="Average Height" />
        </BarChart>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Antelope's height by continent
        </Typography>
      </ResponsiveContainer>
    </Box>
    </Box>
  );
};

export default AntelopeHeightChart;
