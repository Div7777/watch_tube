import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '100%', sm: '358px', md: '290px' },
      height: '300px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px solid #e3e3e3',
            //here marginTop is the props parameter came from channeldetail
            //so it only run when it call from channeldetail component
            marginTop: marginTop,
          }}
        />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon
            sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
          />
          {/* this is the ramayan of showing suscribers */}
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString('en-US')}{' '}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
