import React from 'react'
import  { Container,Typography,Button, ButtonGroup} from '@mui/material';
import {FiDownload} from 'react-icons/fi';
import {BiShareAlt} from 'react-icons/bi';
import '../App.css';
// const drawerWidth = 240;


const Welcome = () => {
return (
    
     <Container sx={{
        width: '50rem',
        position: 'relative',
        margin:'75px 40px',
        display:'flex',
        justifyContent:'space-between',
    }}
    > 
        
    <Container sx={{
       position:'relative',width:'70rem'}}>
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
    
    
    <ButtonGroup class="buttonGroup">
            <Button 
            variant="outlined" 
            size="medium" 
            disableRipple
            disableElevation
            endIcon={<BiShareAlt />}
            sx={{borderRadius: '4px',marginLeft:'10px', color: '#8676ff',borderColor: '#8676ff',width:'130px'}}
            > Share</Button>
            <Button 
            variant="contained" 
            size="medium"
            disableRipple
            disableElevation
            endIcon={<FiDownload/>}
            sx={{borderRadius: '4px',marginLeft:'30px',width:'130px',backgroundColor:'#8676ff'}}
            >Export</Button>
    </ButtonGroup>
    </Container>
)
}

export default Welcome
