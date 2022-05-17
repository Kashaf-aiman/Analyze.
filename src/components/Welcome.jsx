import React from 'react'
import  { Box, Container,Typography,Button, ButtonGroup} from '@mui/material';
import {FiDownload} from 'react-icons/fi';
import {BiShareAlt} from 'react-icons/bi';
import '../App.css';
// const drawerWidth = 240;


const Welcome = () => {
return (
    
    <Box sx={{ display: 'flex', justifyContent: "space-between", flexDirection: { xs: 'column', md: 'row' }, marginBottom: "20px" }}>
        <Container sx={{
        marginBottom:'20px'}}>
            <Typography 
                variant="h2"
                sx={{
                    fontSize: '22px',
                    color:'#383874',
                    fontWeight:600,
                }}
            >Hi, Albert Tristian</Typography>
        <Typography 
                variant="span" sx={{ fontSize:'17px', color:'lightgray',letterSpacing: '1px',justifyContent:'space-between' }}>
                    welcome back to analyze
        </Typography>
        </Container>
    
    
        <ButtonGroup class="buttonGroup" >
                <Button 
                variant="outlined" 
                size="medium" 
                disableRipple
                disableElevation
                endIcon={<BiShareAlt />}
                sx={{textTransform:'capitalize',borderRadius: '4px',marginRight:'10px', color: '#8676ff',borderColor: '#8676ff',padding: "5px 20px"}}
                > Share</Button>
                <Button 
                variant="contained" 
                size="medium"
                disableRipple
                disableElevation
                endIcon={<FiDownload/>}
                sx={{textTransform:'capitalize',borderRadius: '4px',marginRight:'10px', borderColor: '#8676ff',padding: "5px 20px"}}
                >Export</Button>
        </ButtonGroup>
    </Box>
)
}

export default Welcome
