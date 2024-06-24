'use client'

import { Grid, Link, Container, useTheme } from "@mui/material";
import ToggleButton from "./themeButton";

const Header = () => {
  const theme = useTheme();
  return (
      <Grid container className="header" justifyContent="space-between" alignItems="center"
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? 'hsl(209, 23%, 22%)' : 'white',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1,
          width: '100%'
        }}
      >
        <Grid item>
          <Link href="/" aria-label="Home Navigation" 
            sx={{
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
              fontSize: "1.5rem",
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Where in the world?
          </Link>
        </Grid>
        <Grid item>
          <ToggleButton />
        </Grid>
      </Grid>
  );
};

export default Header;
