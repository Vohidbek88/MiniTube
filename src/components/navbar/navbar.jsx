import React from 'react'
import { Stack, Box } from '@mui/material';
import { logo } from '../../constants/index'
import {colors} from '../../constants/colors'
import {Link} from 'react-router-dom';
import {SearchBar} from '../';
const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={'8px'} sx={{ position: 'sticky',top:'0',zIndex:'999',backgroundColor:colors.primary }}>
    <Link to={'/'}>  <img src={logo} alt="aaa" width={70} /></Link>
      <SearchBar/>
      <Box />
    </Stack>
  )
}

export default Navbar
