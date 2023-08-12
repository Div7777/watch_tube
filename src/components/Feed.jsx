import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function Feed() {
  // use state for save the video type when we click from side bar/ initially it is New videos
  const [selectedCategory, setselectCategory] = useState('New');

  // use state for save the video after fetch the video from api and save here
  const [videos, setvideos] = useState([]);

  //when the app first time load useeffect function call and whenever the category select by side baar it call,
  // becoz second parameter has array for selectedCategory
  useEffect(() => {
    //call fetchFromAPI function with dynamic api url with specific catogery of video, save it in setvideos
    //console.log(selectedCategory);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items)
    );
  }, [selectedCategory]);
  return (
    // stack is like a container in material ui 5
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      {/* //box is like a sub container or block in material ui 5 */}
      <Box
        //   sx means style
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid white',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          // send setselectCategory as props which provide/update the name of category of video in sidebar
          selectedCategory={selectedCategory}
          setselectCategory={setselectCategory}
        />
        {/* ramayan for footer/copyright */}
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: 'white' }}
        >
          Copyright 2023 DiveshGallary
        </Typography>
      </Box>
      {/* 2nd box for show catogerize video on display */}
      <Box p={2} style={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          //   color='white' its also working
          sx={{ color: 'white' }}
        >
          {/* here selectedCategory will show the name of video category */}
          {selectedCategory} <span style={{ color: 'red' }}>videos</span>
        </Typography>
        {/* send the 'video data' in Videos component // */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
