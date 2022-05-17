
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Box,Stack} from '@mui/material';
import NavBar from './components/Navbar/NavBar';
import Welcome from './components/Welcome';
import Card from './components/Cards/Card';
import Charts from './components/Graph/Charts';
import React, { useState } from 'react';

export const DrawerContext = React.createContext();

const drawerWidth =240;

function App() {

  const [open,setOpen] = useState(false);

  const toggleDrawer = (open) =>  {
   
    setOpen((prev)=> open);
  }
  return (
    <DrawerContext.Provider value={{ open, toggleDrawer }}>
    <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Sidebar variant="permanent" />
        
        <Stack spacing={2} sx={{ width: `calc(100% - ${drawerWidth}px)`}}>
        <NavBar />
          <Welcome />
          <Card />
          <Charts />
        </Stack>
      </Box>
      <Box
        sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Sidebar variant="temporary" />
        <Stack spacing={2} sx={{ width: '100%' }}>
        <NavBar />
          <Welcome />
          <Card />
          <Charts />
        </Stack>
      </Box>
      </DrawerContext.Provider>
    
   
  );
}

export default App;
