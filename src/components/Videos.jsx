import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, directions }) => {
  // here there will be error because of null in videos, so for resolving use if condition
  if (!videos?.length) return 'Loading';
  return (
    <Stack
      direction={directions ? 'column' : 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
