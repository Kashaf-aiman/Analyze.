import React from 'react';
import { 
    Box,
    Drawer,
    Chip,
    Typography,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    
} from '@mui/material'
import Logo from './Logo';
import {navbarList, navbarList1} from './SideBarItems';
import '../../App.css';
import SAvatar from './Avatar';


const drawerWidth = 240;


const Sidebar = () => {

    const drawerContent = (
        <>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                height: 'auto',
                width: 'auto',
                backgroundColor: 'transparent',
                margin: '10px 10px',
                padding: '10px 0px',
                // borderBottom: '1px solid lightgray',
                alignItems: 'flex-end',
            }}
            >
            <Box
                sx={{
                    flexShrink: 0,
                    display:  { xs: 'none', sm: 'initial' } ,
                    marginBottom: '9px',
                    marginLeft: '9px',
                }}
                >
                <Logo />
            </Box>
            <Typography
                variant="h1"
                noWrap={true}
                gutterBottom
                sx={{
                    display: { xs: 'none', sm: 'initial' },
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#8676ff',
                    width: '174px',
                    marginLeft:'10px',
                    paddingBottom: '5px',
                }}
            >
                Analyze.
            </Typography>
        </Box>
        <List dense={true}>
        {navbarList.map((key, index) => (
                <ListItemButton
                sx={{
                    margin: '6px 14px',
                    padding: '10px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        backgroundColor: 'gray',
                    
                    },
                }}
                >
                <ListItemIcon sx={{ minWidth: '36px' }}>
                    {/* <Badge
                    badgeContent={key.badge}
                    color="secondary"
                    variant="dot"
                    sx={{"& .MuiBadge-badge": { 
                        backgroundColor:'#ff5757',
                        color:'#ff5757'
                      } }}
                    > */}
                    <key.icon sx={{ fontSize: '20px', color: 'ligthgray' }} />
                    {/* </Badge> */}
                </ListItemIcon>
    
                <ListItemText
                    primary={key.desc}
                    primaryTypographyProps={{
                    variant: 'body2', 
                    }}
                    sx={{
                    display: 'inline',
                    margin: '0px',
                    overflowX: 'hidden',
                    color: 'lightgray',
                    fontWeight: 'Medium',
                    whiteSpace: 'nowrap',
                    minWidth: '126px',
                    }}
                />
                {key.badge !== 0 ? (
                    <Chip
                    label={key.badge}
                    color='primary'
                    size="small"
                    sx={{width:'auto' ,
                        height: '20px' , 
                        marginRight: '30px',
                        backgroundColor:'#ff5757'
                    }}
                    />
                ) : (
                    <></>
                )}
                </ListItemButton>
            
        ))}
        <Divider variant="middle" light={true} />
    </List>
    
    <List dense={true}>
    <Box
        sx={{
            marginTop:'15px',
            marginBottom:'10px',
        }}
    >

    <Typography
                variant="h1"
                noWrap={true}
                gutterBottom
                sx={{
                    display: { xs: 'none', sm: 'initial' },
                    fontSize: '12px',
                    color: 'lightgray',
                    width: '174px',
                    marginLeft:'20px',
                    marginBottom:'14px',
                    paddingBottom: '10px',
                    letterSpacing: '3px',
                }}
            >ACCOUNT</Typography>
    </Box>
        {navbarList1.map((key, index) => (
            
                <ListItemButton
                sx={{
                    margin: '6px 14px',
                    padding: '10px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                    backgroundColor: 'gray',
                    color:'#8676ff',
                    },
                }}
                >
                <ListItemIcon sx={{ minWidth: '36px' }}>
                    {/* <Badge
                    badgeContent={key.badge}
                    color="secondary"
                    variant="dot"
                    > */}
                    <key.icon sx={{ fontSize: '20px', color: 'ligthgray' }} />
                    {/* </Badge> */}
                </ListItemIcon>
    
                <ListItemText
                    primary={key.desc}
                    primaryTypographyProps={{
                    variant: 'body2', 
                    }}
                    sx={{
                    display: 'inline',
                    margin: '0px',
                    overflowX: 'hidden',
                    color: 'lightgray',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    minWidth: '126px',
                    }}
                />
                {key.badge !== 0 ? (
                    <Chip
                    label={key.badge}
                    color={'secondary'}
                    size="small"
                    sx={{width:'auto' ,
                        height: '20px',
                        marginRight: '30px',
                        backgroundColor:'#ff5757'
                    }}
                    />
                ) : (
                    <></>
                )}
                </ListItemButton>
        ))}
    </List>
    {/* <Box
        sx= {{
            marginTop:'160px',
        }}
        >
    <Divider variant="middle" light={true} />
    </Box> */}
    
    <Box
        sx={{
            display: 'flex',
            // justifyContent: 'flex-start',
            // alignItems: 'center',
            // alignContents: 'center',
            margin:'0px 14px',
            marginTop:'99px',
            padding: '8px 4px',
            borderTop: '1px solid lightgray',
            borderHeight: '1px',
        }}
        >
        <SAvatar />
    </Box>
    </>
    );

return (
    <Box sx={{ display: 'flex',position: 'static'}}>
    <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            },
        }}
    >
        {drawerContent}
    </Drawer>
</Box>
);
}

export default Sidebar;

