import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

// Component to display a bar chart of antelope horn types distributed by continent.
const HornsByContinentChart = ({ data }) => {
  // Calculate the distribution of horn types per continent from the input data.
  const distribution = data.reduce((acc, antelope) => {
    if (!acc[antelope.continent]) {
      acc[antelope.continent] = {};
    }
    if (!acc[antelope.continent][antelope.horns]) {
      acc[antelope.continent][antelope.horns] = 0;
    }
    acc[antelope.continent][antelope.horns] += 1;
    return acc;
  }, {});

  // Prepare the data for rendering in the chart.
  const chartData = Object.keys(distribution).map(continent => {
    const result = { continent };
    Object.entries(distribution[continent]).forEach(([hornsType, count]) => {
      result[hornsType] = count;
    });
    return result;
  });

  // Identify all unique types of horns to use as keys in the chart.
  const hornsTypes = Object.values(distribution).reduce((acc, curr) => {
    Object.keys(curr).forEach(type => {
      if (acc.indexOf(type) === -1) {
        acc.push(type);
      }
    });
    return acc;
  }, []);

  return (
    // Box component for styling the chart container.
    <Box sx={{
        backgroundColor: '#D2B48C', // Sets background color.
        padding: '50px', // Sets padding around the chart.
        margin: '16px auto', // Centers the chart and adds vertical margin.
        maxWidth: '450px', // Limits chart width for better layout.
        boxShadow: 3, // Adds shadow for depth.
      }}>
    
    <ResponsiveContainer width="100%" height={300}>
      
      <BarChart width={730} height={250} data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" /> // Adds a grid to the chart for better readability.
        <XAxis dataKey="continent" /> // Sets XAxis to display continents.
        <YAxis /> // Displays a YAxis without specific configuration.
        <Tooltip /> // Enables a tooltip that appears on hover.
        <Legend /> // Displays a legend to identify different bars.
       
        {hornsTypes.map((type, index) => (
          <Bar key={index} dataKey={type} stackId="a" fill={`hsl(${(index / hornsTypes.length) * 360}, 70%, 50%)`} />
        ))}
      </BarChart>
      
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
        Antelope's horns distribution by continent
      </Typography>
    </ResponsiveContainer>
    </Box>
  );
};

export default HornsByContinentChart;
