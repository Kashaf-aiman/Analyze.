import * as React from "react";
import { Avatar, Divider, IconButton, Typography,useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function SAvatar() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                height: "auto",
                width: "100%",
                position: "absolute", left: "0", bottom: "0",
            }}
        >
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                    alt=""
                    sx={{ marginLeft: "20px", width: "38px", height: "38px" }}
                ></Avatar>
                <Box sx={{ flexGrow: 1, marginLeft: "15px", padding: "10px 0" }}>
                    <Typography
                        component="div"
                        variant="div"
                        sx={{
                            fontSize: "15px",
                            fontWeight: 600,
                            color:  theme.customTheme,
                            fontFamily: "sans-serif",
                        }}
                    >
                        Albert Tristian
                    </Typography>
                    <Typography
                        component="div"
                        variant="body2"
                        sx={{
                            fontFamily: "sans-serif",
                            fontSize: "13px",
                            color:  theme.customTheme12,
                        }}
                    >
                        Sr. Manager
                    </Typography>
                </Box>
            </Box>
            <IconButton
                sx={{
                    position: "absolute",
                    right: "5px",
                    bottom: "6px",
                    minWidth: "50px",
                    lineHeight: "50px",
                }}
            >
                <KeyboardArrowDownOutlinedIcon />
            </IconButton>
        </Box>
    );
}
