'use client'

import React from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '../_context/themeContext';

const ToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={toggleTheme} sx={{color: mode === 'dark' ? "white" : "black"}}>
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <Typography variant="body1" sx={{ ml: '.1%', color: mode === 'dark' ? "white" : "black", whiteSpace: 'nowrap'}}>
        {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </Typography>
    </Box>
  );
};

export default ToggleButton;
