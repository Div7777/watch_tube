// useState,useEffect in brackets in import mean that they are taken from the react
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function VideoDetail() {
  const [videoDetail, setvideoDetail] = useState(null);
  const [video, setvideo] = useState(null);
  //useparams give the url id of given page
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      // here data.items[0] means the only first video of given id
      .then((data) => setvideoDetail(data.items[0]));

    // here we fetch the only video of related id
    fetchFromAPI(`search?part=snippet&relatedToVideo=${id}&type=video`).then(
      (data) => setvideo(data.items)
    );
  }, [id]);

  // if the snippet is not loading
  if (!videoDetail?.snippet) return 'Loading...';
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            {/* here reactplayer take the url of the video which is to be play */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography color={'white'} variant='h5' fontWeight={'bold'} p={2}>
              {/* here we take title from snippet from videoDetail */}
              {title}
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              sx={{ color: 'white' }}
              py={1}
              px={2}
            >
              {/* here we link the channeldetail page(/channel/${channelId})  by link and router and then fetch data like chennaltitle  */}
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color={'#fff'}
                >
                  {channelTitle}
                  <checkCirle
                    sx={{ fontSize: '12px', color: 'grap', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {/* here parseInt().toLocaleString give the view values with proper coma ',' ex=90,000 view */}
                  {parseInt(viewCount).toLocaleString()} views{' '}
                </Typography>
                <Typography variant='body2' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes{' '}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* here it is for show extra vidoes on rhs of running video */}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={'center'}
          alignItems='center'
        >
          <Videos videos={video} directions='colomn' />
        </Box>
      </Stack>
    </Box>
  );
}
