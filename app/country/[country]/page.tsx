'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { Box, Button, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryDetail: React.FC = () => {
  const router = useRouter();
  const { country } = useParams();
  const [countryData, setCountryData] = useState<any>(null);

  useEffect(() => {
    if (country) {
      const fetchCountryData = async () => {
        try {
          const response = await axios.get(`https://restcountries.com/v3.1/alpha/${country}`);
          setCountryData(response.data[0]);
        } catch (error) {
          console.error('Error fetching country data:', error);
        }
      };

      fetchCountryData();
    }
  }, [country]);

  if (!countryData) return <p>Loading...</p>;

  const handleBorderCountryClick = (border: string) => {
    router.push(`/country/${border.toLowerCase()}`);
  };

  return (
    <Container>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        sx={{ mt: 3, mb: 3 }}
      >
        Back
      </Button>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image={countryData.flags.png}
              alt={`${countryData.name.common} flag`}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {countryData.name.common}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Native Name:</strong> {countryData.name.nativeName[Object.keys(countryData.name.nativeName)[0]].common}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Population:</strong> {countryData.population.toLocaleString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Region:</strong> {countryData.region}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Sub Region:</strong> {countryData.subregion}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Top Level Domain:</strong> {countryData.tld[0]}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Currencies:</strong> {Object.values(countryData.currencies).map((currency: any) => currency.name).join(', ')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Languages:</strong> {Object.values(countryData.languages).join(', ')}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" gutterBottom>
              <strong>Border Countries:</strong>
            </Typography>
            <Grid container spacing={1}>
              {countryData.borders ? countryData.borders.map((border: string) => (
                <Grid item key={border}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: 'hsl(209, 23%, 22%)', color: 'white' }}
                    onClick={() => handleBorderCountryClick(border)}
                  >
                    {border}
                  </Button>
                </Grid>
              )) : <Typography variant="body1" sx={{ml: 1}}>None</Typography>}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CountryDetail;



