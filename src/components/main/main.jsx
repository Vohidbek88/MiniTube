import React, {useState,useEffect} from 'react'
import { colors } from '../../constants/colors'
import { Box,Stack,Container,Typography } from '@mui/material'
import {Category,Videos} from '../'
import {Apiservices} from '../../servise/api.service'
const Main = () => {
  const[selectvideo,Setselectvideo]=useState("New")
  const[videos,Setvideos]=useState([])
  const selectedcategoryHandler=(category)=>{
    Setselectvideo(category)
  }
  useEffect(()=>{
  const Getdata=async()=>{
    try{
      const data=await Apiservices.fetching(`search?part=snippet&q=${selectvideo}`)
      Setvideos(data.items)
      console.log(data.items);
    }
    catch(err){
      console.log(err);
    }
  }
  Getdata()
}  ,[selectvideo])
console.log(videos,"MN");
  return (
   <Stack>
    <Category selectedcategoryHandler={selectedcategoryHandler} selectvideo={selectvideo}/>
    <Box padding={'10px'} height={'90vh'}>
     <Container maxWidth={'90%'}>
      <Typography variant='h4' fontWeight={'bold'} marginBottom={'10px'}>
        {selectvideo} <span style={{color:colors.secondary}}>Videos</span>
      </Typography>
      <Videos videos={videos}/>

     </Container>
    </Box>
   </Stack>
  )
}

export default Main
