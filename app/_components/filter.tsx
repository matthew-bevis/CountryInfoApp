import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

interface FilterProps {
  region: string;
  onRegionChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
}

const Filter: React.FC<FilterProps> = ({ region, onRegionChange }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Filter by Region</InputLabel>
        <Select value={region} onChange={onRegionChange} label="Filter by Region">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
