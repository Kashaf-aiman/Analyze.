import * as React from 'react';
import Box from '@mui/material/Box';
import {Button,Grid,Divider, IconButton} from '@mui/material';
import {FiArrowUpRight,FiArrowDownRight} from 'react-icons/fi';
import Typography from '@mui/material/Typography';
import {CgChevronDoubleRight} from 'react-icons/cg';



export  const Cards = (props) => {
return (

    <Grid item xs={12} md={6} lg={4} >
        <Box sx={{ border: "1px solid #e4e4e4", borderRadius: "5px" , '&:hover':{cursor:'pointer'}}}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                <Box>
                    <Typography variant='h6' component='span' sx={{ fontSize:"13px",color: "#a7a7c2",}}>
                        {props.title}
                    </Typography>
                    <Typography variant="h4" component="h6" sx={{fontSize:'26px', color: "#383874", fontWeight: 'bold' }} gutterBottom>
                        {props.value}
                    </Typography>
                    <Typography variant='h6' component='h6' sx={{ color: "#bcbdcd", fontSize: "13px" }}>
                        <Typography variant="body1" component="span" sx={{ fontSize:'13px',color: props.status ==='increase'? "#29cea1" : '#ff708b' }}>{props.percentage}</Typography> {props.status} comapred to last week
                    </Typography>
                </Box>
                <Box>
                    <Box
                        sx={{ color: props.status ==='increase'? "#29cea1" : '#ff708b' , backgroundColor: "#f8f9fb", borderRadius: "5px", padding: "5px" }} >
                       { props.status==='increase'? <FiArrowUpRight />: <FiArrowDownRight/>}
                    </Box>
                </Box>
            </Box>
            <Divider />
            
            <Box 
            sx={{ 
            display: 'flex', 
            justifyContent: "space-between", 
            alignItems: 'center', 
            padding: "5px 15px",
            transition: 'all 0.2s ease-in-out',
            '&:hover':{
                backgroundColor:'#8676ff',
            }
            }}>
                <Typography variant='h6' component='h6' sx={{ color: "#8676ff", fontSize: "15px",'&:hover':{color:'white',}}}>
                    See Details
                </Typography>
                <IconButton sx={{'&:hover':{
                        color:'white',
            }}}>
                <CgChevronDoubleRight />
                </IconButton>
            </Box>
        </Box>
</Grid>
  );
}
