import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Apiservices } from '../../servise/api.service'
import { Box, Container, Typography} from '@mui/material'
import { Videos } from '../'

const Search = () => {
  const [videos, Setvideos] =useState([])
  const {id}=useParams()
  useEffect(()=>
  {
    const Getdata=async()=>{
      try{
        const data=await Apiservices.fetching(`search?part=snippet&q=${id}`)
        Setvideos(data.items)
        console.log(data.items);
      }
      catch(err){
        console.log(err);
      }
    }
    Getdata()
  },[id])
  return (
   <Box p={2} sx={{height:'90vh'}}>
<Container maxWidth={'90%'}>
  <Typography variant='h4' fontWeight={'bold'} mb={2}>
    Search results for <span style={{color:'gray'}}>{id}</span> Videos
  </Typography>
  <Videos videos={videos}/>
</Container>
   </Box>
  )
}

export default Search
