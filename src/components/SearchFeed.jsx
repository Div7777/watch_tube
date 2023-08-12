import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function SearchFeed() {
  const [videos, setvideos] = useState([]);
  // useParams store the urls id
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);
  if (searchTerm === undefined) return 'loading..';
  return (
    <Box p={2} style={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography
        variant='h4'
        fontWeight='bold'
        mb={2}
        //   color='white' its also working
        sx={{ color: 'white' }}
      >
        {/* here selectedCategory will show the name of video category */}
        Search Resutls for: <span style={{ color: 'red' }}>{searchTerm} </span>
        videos
      </Typography>
      {/* send the 'video data' in Videos component // */}
      <Videos videos={videos} />
    </Box>
  );
}
