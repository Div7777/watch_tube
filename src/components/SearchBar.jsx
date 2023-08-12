import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      // here if ther is any search related to video is found then
      // we navigate this below route and reach to the router of that page
      navigate(`/search/${searchTerm}`);
      setsearchTerm('');
    }
  };
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 8,
        border: '1px solid black',
        height: 40,
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      ></input>
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
