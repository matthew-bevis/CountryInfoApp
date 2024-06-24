'use client'

import * as React from 'react';
import { Grid, ThemeProvider, useTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './home/page';

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  );
}

export default App;



