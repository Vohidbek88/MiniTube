import React, { useState } from 'react'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { colors } from '../../constants/colors'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
  const navigate=useNavigate()
  const[value,Setvalue]=useState('')
  const Submithandler=(e)=>{
e.preventDefault()
console.log(value);
if(value){
  navigate(`search/${value}`)
}
  }
  return (
    <Paper onSubmit={Submithandler} component={'form'} sx={{border:`1px solid ${colors.secondary}`,paddingLeft:'10px',boxShadow:'none',borderRadius:'none'}}>
        <input type="text" placeholder='Search...' className='search-bar' value={value} onChange={e=>Setvalue(e.target.value)}/>
        <IconButton type='submit'>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
