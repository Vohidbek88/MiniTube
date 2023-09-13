import React from 'react'
import { Box,CardContent,CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
const Channelcard = ({video}) => {
  
  return (
    <Box sx={{boxShadow:'none',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'356px',md:'300px'},height:'326px',margin:'auto'}}>
      <CardContent>
      <CardMedia iamge={video?.snippet?.thumbnails?.deafult?.url} alt="kkkkk" sx={{width:'180px',height:'180px',borderRadius:'50%',mb:2,border:'1px solid #e3e3e3'}}/>
    <Typography>{video?.snippte?.title}{' '}
    <CheckCircle sx={{fontSize:'14px',color:'gray',ml:'5px'}}/>
    </Typography>
    {video?.statistics?.subscriberCount && (
						<Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
							{parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
						</Typography>
					)}
      </CardContent>

    </Box>
  )
}

export default Channelcard
