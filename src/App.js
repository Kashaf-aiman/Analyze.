import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Box, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./components/Navbar/NavBar";
import WelcomeBody from "./components/WelcomeBody";
import Card from "./components/Cards/Card";
import Charts from "./components/Charts/Charts";
import React, { useState } from "react";
import OrderListData from "./components/OrderList/OrderList";
import { theme } from "./colors";

export const DrawerContext = React.createContext();
const drawerWidth = 240;

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen((prev) => open);
  };

  return (
    <ThemeProvider theme={theme}>
      <DrawerContext.Provider value={{ open, toggleDrawer }}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Sidebar variant="permanent" />
          <Stack spacing={2} sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
            <NavBar />
            <Box sx={{ padding: "20px" }}>
              <WelcomeBody />
              <Card />
              <Charts />
              <OrderListData />
            </Box>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Sidebar variant="temporary" />
          <Stack spacing={2} sx={{ width: "100%" }}>
            <NavBar />
            <Box sx={{ padding: "20px" }}>
              <WelcomeBody />
              <Card />
              <Charts />
              <OrderListData />
            </Box>
          </Stack>
        </Box>
      </DrawerContext.Provider>
    </ThemeProvider>
  );
}

export default App;
