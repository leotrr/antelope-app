import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

// Defines a functional component for the application's AppBar (navigation bar).
const AppBarComponent = () => {
  // Initializes state for managing the anchor element of the dropdown menu.
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to handle click event on the menu icon and set the current target as the anchor element.
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the dropdown menu by resetting the anchor element to null.
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#D2B48C' }}> {/* AppBar component from Material-UI with static position and a custom background color. */}
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}> {/* Typography for the application's title with flex grow style to push the menu icon to the edge. */}
          Antelope Dashboard
        </Typography>

        <IconButton color="inherit" onClick={handleMenuClick}> {/* IconButton component that triggers the dropdown menu on click. */}
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl} // Binds the menu's position to the anchor element.
          keepMounted // Optimizes rendering performance.
          open={Boolean(anchorEl)} // Controls the menu's visibility based on the anchor element's presence.
          onClose={handleClose} // Closes the menu on selection or when clicking outside the menu.
        >
          {/* MenuItem components representing navigation links. Clicking on these items navigates to different parts of the app and closes the menu. */}
          <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/continent-distribution">Antelope across continents</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/weight-by-continent">Antelope weight by continents</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/height-by-continent">Antelope height by continent</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/horns-distribution">Horns distribution</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/horns-by-continent">Horns distribution by continent</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
