import React from 'react'
import { Stack,Box } from '@mui/material';
import{ Videocard,Channelcard, Loader} from '../';
const Videos = ({videos}) => {
  if(!videos.length) return <Loader/>
console.log(videos,"VId");
  return (
  <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={2}>
{
videos.map((item,index)=>{
 return(
  <Box key={index}>
  {item.id.videoId && <Videocard video={item}/>}
  {item.id.channelId && <Channelcard video={item}/>}
</Box>
 )
})
}
  </Stack>
  )
}

export default Videos
