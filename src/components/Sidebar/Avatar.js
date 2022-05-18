import * as React from 'react';
import {Avatar,IconButton,Typography} from '@mui/material';
import Box from '@mui/material/Box';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


export default function SAvatar() {
  return (
    <Box sx={{display:'flex',flexDirection:'row',padding: '0px 16px',}}>
   
    <Box
    sx={{
    position:'absolute',
    marginTop:'20px',
    alignItems: 'center',
    alignContent: 'center',
    }}
>

    <Box>
        <Avatar alt="Remy Sharp" sx={{ width: '32px', height: '32px' }}>
        </Avatar>
    </Box>
</Box>

<Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1,marginLeft: '45px',marginTop:'20px',}}>
    <Typography
    component="span"
    variant="body2"
    sx={{
        // fontFamily: 'inherit',
        display: 'block',
        whiteSpace: 'nowrap',
        lineHeight: 'inherit',
        fontWeight: 600,
        color: '#383874',
        

    }}
    >
    Albert Tristian
    </Typography>
    <Typography
    component="span"
    variant="body2"
    sx={{
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
<IconButton contained sx={{ color: 'black',marginLeft: '20px',marginTop:'20px',}}>
    <KeyboardArrowDownOutlinedIcon />
</IconButton>

    </Box>
);
}
