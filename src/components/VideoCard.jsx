import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

// we take the vidoeId and snippet from the props.video send from Feed {video}
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '290px' },
        boxShadow: 'none',
        borderRadius: 'none',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '80px' }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='white'>
              {snippet?.title.slice(0, 42) || demoVideoTitle.slice(0, 40)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
              {snippet?.channelTitle.slice(0, 42) || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 14, color: 'white', ml: '6px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
