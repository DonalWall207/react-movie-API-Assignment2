import {React, useContext, useState} from 'react'
import { Pagination } from '@mui/material'
import { MoviesContext } from '../../contexts/moviesContext';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { MovieActorContext } from '../../contexts/movieActorContext';

export default function Footer() {

    const {setPageNumber,pageNum} = useContext(MoviesContext)
    const [page,setPage] = useState(pageNum);
    

    const handleChange = (event,value) => {
        var num = parseInt(value)
        setPageNumber(num)
        setPage(value)
        console.log("value"+ value)
        
      };
  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItem:"center",
        flexWrap: "wrap",
        marginBottom: 1.5,
        font:"30"
      }}
    >
        <Typography variant="h4" component="h3">
        <Pagination count = {500} defaultPage={1} page={page} color="secondary" size="large" onChange={handleChange} />
  </Typography>
    
    </Paper>
    
    )
}