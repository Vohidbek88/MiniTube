import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom'
const Channel = () => {
    const params=useParams()
    console.log(params);
  return (
    <div> 
         <Link to={'/'}><Button>Main</Button></Link>
    </div>
  )
}

export default Channel
