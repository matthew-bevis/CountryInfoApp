import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import axios from 'axios';
import SearchBar from '../_components/search-bar';
import Filter from '../_components/filter';
import CountryCard from '../_components/country-card';

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: { png: string };
}

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchAllCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchValue.toLowerCase()) &&
      (region ? country.region === region : true)
    );
    setFilteredCountries(filtered);
  }, [searchValue, region, countries]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(e.target.value as string);
  };

  return (
    <Container className='mainContent'>
      <Grid container justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <SearchBar searchValue={searchValue} onSearchChange={handleSearchChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{justifyContent: 'flex-end' }}>
          <Filter region={region} onRegionChange={handleRegionChange} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {filteredCountries.map((country) => (
          <Grid item key={country.name.common} xs={12} sm={6} md={4} lg={3}>
            <CountryCard
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;


