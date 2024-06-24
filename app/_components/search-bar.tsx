import React from 'react';
import { TextField, Box, useTheme, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, onSearchChange }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={onSearchChange}
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? 'hsl(209, 23%, 22%)' : 'white',
          borderRadius: '5px',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;


