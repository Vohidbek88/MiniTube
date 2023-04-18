import React from 'react'
import { Stack } from '@mui/material'
import { category } from '../../constants/index'
import { colors } from '../../constants/colors'
const Category = ({selectedcategoryHandler,selectvideo}) => {
  return (
   <Stack sx={{height:'auto',overflowX:'scroll'}} direction={'row'}>
{
    category.map(arr=>{
           return(
            <button key={arr.name} className='category-btn' style={{borderRadius:'0',background:arr.name===selectvideo && colors.secondary, color:arr.name===selectvideo && "#fff"}} onClick={()=>selectedcategoryHandler(arr.name)}>
                <span style={{color:arr.name===selectvideo ? "#fff" : colors.secondary,marginRight:'15px'}}>{arr.icon}</span>
                <span>{arr.name}</span>
            </button>
           )
    })
}
   </Stack>
  )
}

export default Category
