import React from "react";
import {
  AppBar,
  Badge,
  ToggleButton,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { FiSearch } from "react-icons/fi";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledToggleButtonGroup,
} from "./NavBarElements";
import { DrawerContext } from "../../App";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const { open, toggleDrawer } = React.useContext(DrawerContext);
  const [alignment, setAlignment] = React.useState("English");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid lightgray",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2, color: "#7d7d98" }}
              onClick={() => {
                toggleDrawer(!open);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <StyledToggleButtonGroup
            color="standard"
            size="small"
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{
              justifyContent: "center",
              width: "80px",
              height: "40px",
              backgroundColor: "#F0F0F0",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            <ToggleButton value="English">EN</ToggleButton>
            <ToggleButton value="Indonasian">ID</ToggleButton>
          </StyledToggleButtonGroup>

          <Typography
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: "14px",
              color: "Gray",
              marginLeft: "4px",
              fontFamily: "sans-serif",
            }}
          >
            {alignment}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              color: "gray",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <IconButton
              style={{ marginRight: "2px", backgroundColor: "#F0F0F0" }}
            >
              <Badge
                variant="dot"
                overlap="circular"
                badgeContent=""
                sx={{
                  marginRight: "2px",
                  "& .MuiBadge-badge": {
                    backgroundColor: "#ff6167",
                    color: "#ff6167",
                  },
                }}
              >
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <FiSearch />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search or type keyword"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
