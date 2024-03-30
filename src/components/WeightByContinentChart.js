// Importing necessary components from React and Material-UI for UI layout and styling
import React from 'react';
import { Typography, Box } from '@mui/material';

// Importing components from Recharts for data visualization
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Definition of the WeightByContinentChart component that takes 'data' as a prop
const WeightByContinentChart = ({ data }) => {
  // Aggregating data: computing total weight and count of antelopes per continent
  const continentWeights = data.reduce((acc, antelope) => {
    if (!acc[antelope.continent]) {
      acc[antelope.continent] = { totalWeight: 0, count: 0 };
    }
    acc[antelope.continent].totalWeight += antelope.weight;
    acc[antelope.continent].count += 1;
    return acc;
  }, {});

  // Transforming aggregated data into chart-friendly format, calculating average weight
  const chartData = Object.keys(continentWeights).map(continent => ({
    continent,
    averageWeight: continentWeights[continent].totalWeight / continentWeights[continent].count,
  }));

  // Rendering the chart and related UI elements in a responsive container
  return (
    <Box sx={{
        backgroundColor: '#D2B48C', // Setting the background color of the chart container
        padding: '50px', // Padding around the chart
        margin: '16px auto', // Margin for auto centering and spacing
        maxWidth: '450px', // Maximum width of the chart container
        boxShadow: 3, // Applying shadow to the container for depth
      }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ mt: '2cm' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="continent" />
            <YAxis label={{ value: 'Average weight (lbs)', angle: -90, position: 'insideLeft', dy: 10  }} />
            <Tooltip />
            <Bar dataKey="averageWeight" fill="#8884d8" name="Average Weight"  />
          </BarChart>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
            Antelope's weight by continent
          </Typography>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

// Exporting the component for use in other parts of the application
export default WeightByContinentChart;
