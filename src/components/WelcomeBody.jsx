import React from 'react'
import  { Box, Container,Typography,Button, ButtonGroup} from '@mui/material';
import {FiDownload} from 'react-icons/fi';
import {BiShareAlt} from 'react-icons/bi';
import '../App.css';
// const drawerWidth = 240;


const WelcomeBody = () => {
return (
    
    <Box sx={{ display: 'flex', justifyContent: "space-between", flexDirection: { xs: 'column', md: 'row' }, marginBottom: "22px" }}>
        <Container >
            <Typography 
                variant="h2"
                sx={{
                    fontSize: '22px',
                    color:'#383874',
                    fontWeight:600,
                    fontFamily:'sans-serif',
                }}
            >Hi, Albert Tristian</Typography>
        <Typography 
                variant="h6" sx={{ fontFamily:'sans-serif', fontSize:'17px', color:'lightgray',letterSpacing: '1px',justifyContent:'space-between' }}>
                    welcome back to analyze
        </Typography>
        </Container>
    
    
        <ButtonGroup class="buttonGroup" >
                <Button 
                variant="outlined" 
                size="small" 
                disableRipple
                disableElevation
                endIcon={<BiShareAlt />}
                sx={{textTransform:'capitalize',borderRadius: '4px',marginRight:'10px', color: '#8676ff',borderColor: '#8676ff',padding: "5px 20px"}}
                > Share</Button>
                <Button 
                variant="contained" 
                size="small"
                disableRipple
                disableElevation
                endIcon={<FiDownload/>}
                sx={{textTransform:'capitalize',borderRadius: '4px',marginRight:'10px', backgroundColor: '#8676ff',padding: "5px 20px"}}
                >Export</Button>
        </ButtonGroup>
    </Box>
)
}

export default WelcomeBody
