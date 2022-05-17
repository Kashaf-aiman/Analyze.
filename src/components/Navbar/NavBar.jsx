import React from 'react';
import { 
  AppBar,
  Badge,
  ToggleButton,
  Box, 
  Toolbar, 
  Typography,
  IconButton, 
  } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {FiSearch} from 'react-icons/fi';
import { Search,SearchIconWrapper,StyledInputBase,StyledToggleButtonGroup } from './NavBarElements';


const drawerWidth = 240;


const NavBar = () => {
  const [alignment, setAlignment] = React.useState('English');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment) ;
  }

  return (
    <AppBar
    position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
            height: '65px',
            // position:'static',
            margin: '0px',
            padding: '0px 10px',
            backgroundColor: 'white',
            boxShadow: 'none',
            borderBottom: '1px solid lightgray',
            justifyContent:'space-between'
      }}
    >
          <Toolbar sx = {{
            display: 'flex',
          }}>
          <StyledToggleButtonGroup
                      color='standard'
                      size="small"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      sx = {{
                        marginLeft:'10px',
                        marginRight:'6px',
                        justifyContent: 'center',
                        width:'80px',
                        height:'40px',
                        backgroundColor:'#F0F0F0',
                        borderRadius:'10px',
                        fontWeight:"bold",
                      }}
                    >
                      <ToggleButton  value="English" >EN</ToggleButton>
                      <ToggleButton  value="Indonasian">ID</ToggleButton>
                    </StyledToggleButtonGroup>
                    
                    <Typography sx={{ fontSize:'14px',color:'Gray',marginLeft:'4px'}}>{alignment}</Typography>
          </Toolbar>

          <Box sx={{ 
                      color:'gray',
                      margin:'15px 900px',
                      // padding: '0 10px',
                      display: { xs: 'none', sm: 'flex'},
                      position:'absolute',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      }}>
          <IconButton style = {{ marginRight: '2px' }}>

            <Badge variant="dot" overlap="circular" badgeContent="" sx={{ 
              marginRight:'2px',
              "& .MuiBadge-badge": { 
                backgroundColor:'#ff5757',
                color:'#ff5757'
              } 
          
          }}><NotificationsNoneOutlinedIcon /></Badge>
          </IconButton>
            <Search >
            <SearchIconWrapper>
              <FiSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder = "Search or type keyword"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
    </AppBar>
    
    
  )
}

export default NavBar;
