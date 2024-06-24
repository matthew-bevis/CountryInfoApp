'use client'

import React from 'react';
import { Card, CardContent, Typography, CardMedia, useTheme, Box, Link } from '@mui/material';

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, population, region, capital, flag }) => {
  const theme = useTheme();

  return (
    <Link href={`/country/${name.toLowerCase()}`} underline="none" sx={{ textDecoration: 'none' }}>
      <Card sx={{ height: '100%', cursor: 'pointer' }}>
        <CardMedia component="img" height="140" image={flag} alt={name} />
        <CardContent
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? 'hsl(209, 23%, 22%)' : 'white',
            color: theme.palette.mode === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'calc(100% - 140px)', // Subtracting the height of the image
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Population: {population.toLocaleString()} <br />
              Region: {region} <br />
              Capital: {capital}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryCard;




