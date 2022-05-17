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
import { DrawerContext } from '../../App';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const NavBar = () => {
  const { open, toggleDrawer } = React.useContext(DrawerContext);
  const [alignment, setAlignment] = React.useState('English');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment) ;
  }

  return (
    <AppBar
    position="static"
    elevation={1}
    sx={{
      backgroundColor: 'white',
            boxShadow: 'none',
            borderBottom:'1px solid lightgray'
      }}
    >
          <Toolbar sx = {{
            display: 'flex',
          }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2, color: '#7d7d98' }}
              onClick={() => { toggleDrawer(!open) }}
              
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <StyledToggleButtonGroup
                      color='standard'
                      size="small"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      sx = {{
                        ml:'10px',
                        mr:'6px',
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
                      margin:'5px 59rem',
                      display: { xs: 'flex', sm: 'flex'},
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
