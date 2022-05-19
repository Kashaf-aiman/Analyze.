import React from "react";
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
    IconButton,
    ListSubheader,
} from "@mui/material";
import Logo from "./Logo";
import { navbarList, navbarList1 } from "./SideBarItems";
import "../../App.css";
import SAvatar from "./Avatar";
import { DrawerContext } from "../../App";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const drawerWidth = 240;

const Sidebar = ({ variant }) => {
    const { open, toggleDrawer } = React.useContext(DrawerContext);

    const drawerContent = (
        <Box sx={{ overflowY: "auto"}}>
            <List
                dense={true}
                subheader={
                    <ListSubheader>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "15px 0px",
                            }}
                        >
                            <Box sx={{ marginTop: "5px", marginLeft: "5px" }}>
                                {" "}
                                <Logo />{" "}
                            </Box>
                            <Typography
                                variant="span"
                                noWrap={true}
                                gutterBottom
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    color: "#8676ff",
                                    width: "164px",
                                    marginLeft: "10px",
                                }}
                            >
                                Analyze.
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    mb: "7px",
                                    color: "#7d7d98",
                                }}
                                onClick={() => {
                                    toggleDrawer(!open);
                                }}
                            >
                                <CloseOutlinedIcon />
                            </IconButton>
                        </Box>
                    </ListSubheader>
                }
            >
                {navbarList.map((key, index) => (
                    <ListItemButton
                        sx={{
                            margin: "6px 14px",
                            padding: "10px",
                            borderRadius: "8px",
                            transition: "all 0.2s ease-in-out",
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: "36px" }}>
                            <key.icon sx={{ fontSize: "20px", color: "#9e9e9e" }} />
                        </ListItemIcon>

                        <ListItemText
                            primary={key.desc}
                            primaryTypographyProps={{
                                variant: "body2",
                            }}
                            sx={{
                                display: "inline",
                                margin: "0px",
                                overflowX: "hidden",
                                fontFamily: "sans-serif",
                                color: "#9e9e9e",
                                fontWeight: "Medium",
                                whiteSpace: "nowrap",
                                minWidth: "126px",
                            }}
                        />
                        {key.badge !== 0 ? (
                            <Chip
                                label={key.badge}
                                color="primary"
                                size="small"
                                sx={{
                                    width: "auto",
                                    height: "21px",
                                    margin: "auto",
                                    backgroundColor: "#ff6167",
                                    borderRadius: "5px",
                                }}
                            />
                        ) : (
                            <></>
                        )}
                    </ListItemButton>
                ))}
                <Divider variant="middle" light={true} sx={{ marginTop: 3 }} />
            </List>
            <List>
                <Box
                    sx={{
                        marginTop: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <Typography
                        variant="h1"
                        noWrap={true}
                        gutterBottom
                        sx={{
                            display: { xs: "none", sm: "initial" },
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            color: "#9e9e9e",
                            width: "174px",
                            marginLeft: "20px",
                            marginBottom: "14px",
                            paddingBottom: "10px",
                            letterSpacing: "3px",
                        }}
                    >
                        ACCOUNT
                    </Typography>
                </Box>
                {navbarList1.map((key, index) => (
                    <ListItemButton
                        sx={{
                            margin: "6px 14px",
                            padding: "10px",
                            borderRadius: "8px",
                            transition: "all 0.2s ease-in-out",
                            color: "#8676ff",
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: "36px" }}>
                            <key.icon sx={{ color: "#9e9e9e" }} />
                        </ListItemIcon>

                        <ListItemText
                            primary={key.desc}
                            primaryTypographyProps={{
                                variant: "body2",
                            }}
                            sx={{
                                display: "inline",
                                margin: "0px",
                                overflowX: "hidden",
                                fontFamily: "sans-serif",
                                color: "#9e9e9e",
                                fontWeight: "Medium",
                                whiteSpace: "nowrap",
                                minWidth: "126px",
                            }}
                        />
                        {key.badge !== 0 ? (
                            <Chip
                                label={key.badge}
                                color={"secondary"}
                                size="small"
                                sx={{
                                    width: "auto",
                                    height: "21px",
                                    margin: "auto",
                                    backgroundColor: "#ff6167",
                                    borderRadius: "5px",
                                }}
                            />
                        ) : (
                            <></>
                        )}
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            variant={variant}
            anchor={"left"}
            open={open}
            sx={{
                minWidth: "220px",
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            {drawerContent}
            <SAvatar />
        </Drawer>
    );
};

export default Sidebar;
