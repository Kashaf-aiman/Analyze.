import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Divider, CardActions } from "@mui/material";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import Typography from "@mui/material/Typography";
// import {CgChevronDoubleRight} from 'react-icons/cg';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useTheme } from "@mui/material";


export const Cards = (props) => {
    const theme = useTheme();
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Box
                sx={{
                    border: "1px solid #e4e4e4",
                    borderRadius: "5px",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        cursor: "pointer",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    },
                    "&:hover::after": {
                        opacity: "1",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 15px",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            component="span"
                            sx={{ fontSize: "13px", color:  theme.customTheme3 }}
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h6"
                            sx={{ fontSize: "26px", color:  theme.customTheme, fontWeight: "bold" }}
                            gutterBottom
                        >
                            {props.value}
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{ color: "#bcbdcd", fontSize: "13px" }}
                        >
                            <Typography
                                variant="body1"
                                component="span"
                                sx={{
                                    fontSize: "13px",
                                    color: props.status === "increase" ?  theme.customTheme4 :  theme.customTheme5,
                                }}
                            >
                                {props.percentage}
                            </Typography>{" "}
                            {props.status} comapred to last week
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                color: props.status === "increase" ?  theme.customTheme4 :  theme.customTheme5,
                                backgroundColor:  theme.customTheme6,
                                borderRadius: "5px",
                                padding: "5px",
                            }}
                        >
                            {props.status === "increase" ? (
                                <FiArrowUpRight />
                            ) : (
                                <FiArrowDownRight />
                            )}
                        </Box>
                    </Box>
                </Box>
                <Divider />

                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px 15px",
                        transition: "all 0.3s ease-in-out",
                        color:  theme.customTheme2,
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        borderRadius: "5px",
                        "&:hover": {
                            backgroundColor: theme.customTheme2,
                            color: "white",
                        },
                    }}
                >
                    See Details
                    <KeyboardDoubleArrowRightIcon />
                </CardActions>
            </Box>
        </Grid>
    );
};
