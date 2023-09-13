import {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
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
    <Box minHeight={'100vh'} mb={10}>
<Box display={'flex'} height={'100vh'}>
  <Box width={'100%'} height={'100vh'}>
    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
  </Box>
</Box>
  <button style={{backgroundColor:'black',color:'white',padding:'10px 20px',width:'100px',margin:'0 auto',border:'none'}}><Link to={'/'}>Back to</Link></button>
    </Box>
  )
}

export default VideoDetail
