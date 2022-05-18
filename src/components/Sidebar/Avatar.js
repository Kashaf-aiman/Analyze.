import * as React from 'react';
import {Avatar,IconButton,Typography} from '@mui/material';
import Box from '@mui/material/Box';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


export default function SAvatar() {
  return (
    <Box sx={{position:'absolute',left:'0',bottom:'0', width:'100%',borderTop:'1px solid lightgray'}}>
        <Box
            sx={{
            position:'relative',
            padding:'10px 4px',
            height:'40px'
            }}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Avatar alt="Remy Sharp" sx={{marginLeft:'20px', width: '32px', height: '32px' }}></Avatar>
                <Box sx={{  flexGrow: 1,marginLeft: '15px'}}>
                    <Typography
                    component="div"
                    variant="div"
                    sx={{
                        whiteSpace: 'nowrap',
                        fontSize:'15px',
                        lineHeight: 'inherit',
                        fontWeight: 600,
                        color: '#383874',
                        fontFamily:'sans-serif',
                    }}
                    >
                    Albert Tristian
                    </Typography>
                    <Typography
                    component="div"
                    variant="body2"
                    sx={{
                        fontFamily:'sans-serif',
                        display: 'block',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        lineHeight: 'inherit',
                        marginTop:'3px',
                        color: '#44b700',
                    }}
                    >
                    Sr. Manager
                    </Typography>
                </Box>  
            </Box>
            <IconButton  sx={{ position:'absolute',left:'88%',bottom:'10px',minWidth:'50px',lineHeight:'50px',transform:'translateX(-50%)'}}>
                <KeyboardArrowDownOutlinedIcon />
            </IconButton>
        </Box>
    </Box>
);
}
