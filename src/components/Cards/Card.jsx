import React from 'react'
import {Grid,Box} from '@mui/material';
import {Cards} from './CardElement';

const Card = () => {
  return (
    <Box sx={{marginBottom: "20px" }}>
        <Grid container spacing={7}>
            <Cards title = "TOTAL INCOME" value="$589,209.78" percentage="20%" status="increase" />
            <Cards title = "TOTAL EXPENSE" value="$120,458.90" percentage="15%" status="decrease" />
            <Cards title = "TOTAL VISITORS" value="502,903" percentage="80%" status="increase" />
        </Grid>
    </Box>
  )
}

export default Card;
