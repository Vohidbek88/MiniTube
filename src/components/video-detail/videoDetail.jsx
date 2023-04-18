import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Apiservices } from '../../servise/api.service'
import { Box, Chip, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [relatedVideo, setRelatedVideo] = useState([])
  const {id}=useParams()
  useEffect(()=>{
const Getdata=async()=>{
  try {
    const data=await Apiservices.fetching(`videos?part=snippet,statistics&id=${id}`)
    setVideoDetail(data.items[0])
    // console.log(videtail,"maan");
    const relatedData = await Apiservices.fetching(
					`search?part=snippet&relatedToVideoId=${id}&type=video`
				)
				setRelatedVideo(relatedData.items)
  } catch (error) {
    console.log(error);
  }
}
Getdata()

  },[id])

  // const {snippet:{title,channelId,channelTitle,description,tags,thumbnails},statistics:{viewCount,likeCount,commentCount}}=vidDetail
  return (
    <Box minHeight={'90vh'} mb={10}>
<Box display={'flex'}>
  <Box width={'75%'}>
    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
    {/* {videoDetail?.snippet.tags.map((item, idx) => (
						<Chip
							label={item}
							key={idx}
							sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
							onDelete={() => {}}
							variant='outlined'
						/>
					))} */}
					{/* <Typography variant='h5' fontWeight='bold' p={2}>
						{videoDetail.snippet.title}
					</Typography>
					<Typography variant='subtitle2' p={2} sx={{ opacity: '.7' }}>
						{(videoDetail.snippet.description)}
					</Typography> */}
    {/* {
    videtail.snippet.tags.map((arr,index)=>{
     <Chip label={arr} key={index} sx={{marginTop:'10px',cursor:'pointer',ml:'10px'}}  onDelete={()=>{}} variant='outlined'/>
    })
    } */}
    {/* <Typography variant='h5' fontWeight={'bold'} p={2} >
{videtail.snippet.title}
    </Typography>
    <Typography variant='subtitle1'  p={2} sx={{opacity:'0.7'}}>
{videtail.snippet.description}
    </Typography> */}``
  </Box>
  <Box>Suggested Video</Box>
</Box>
    </Box>
  )
}

export default VideoDetail
