// Imports necessary React functionality, React Router components for SPA routing, and custom components for different data visualizations.
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntelopeTable from './components/AntelopeTable';
import AntelopeContinentDistributionChart from './components/AntelopeContinentDistributionChart';
import WeightByContinentChart from './components/WeightByContinentChart';
import AntelopeHeightChart from './components/AntelopeHeightChart';
import AntelopeHornsChart from './components/AntelopeHornsChart';
import HornsByContinentChart from './components/HornsByContinentChart';
import AppBarComponent from './components/common/AppBar';

function App() {
  // useState hook to manage the state of antelopes data within the app.
  const [antelopes, setAntelopes] = useState([]);

  // useEffect hook to fetch antelopes data from a local JSON file when the component mounts.
  useEffect(() => {
    fetch('/species.json') // Make sure to configure proxy if needed.
      .then(response => response.json())
      .then(data => setAntelopes(data))
      .catch(error => console.error('Error fetching antelopes data:', error));
  }, []);

  // The Router component wraps the entire application to enable client-side routing.
  return (
    <Router>
      <AppBarComponent/> 
      <div>
        <Routes>
          {/* Route definitions for each path in the application, rendering different components based on the URL. */}
          <Route path="/" element={<AntelopeTable data={antelopes} />} />
          <Route path="/continent-distribution" element={<AntelopeContinentDistributionChart data={antelopes} />} />
          <Route path="/weight-by-continent" element={<WeightByContinentChart data={antelopes} />} />
          <Route path="/height-by-continent" element={<AntelopeHeightChart data={antelopes} />} />
          <Route path="/horns-distribution" element={<AntelopeHornsChart data={antelopes} />} />
          <Route path="/horns-by-continent" element={<HornsByContinentChart data={antelopes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exports the App component for use in the application.
