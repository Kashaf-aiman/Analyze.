import React from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme
} from "@mui/material";
import { OrderListData } from "../Data";

export default function OrderList() {
    const theme = useTheme();
    return (
        <Box>
            <Typography
                component="h6"
                variant="h6"
                sx={{
                    padding: "0px 8px",
                    fontSize: "18px",
                    color: theme.customTheme,
                    fontWeight: "bold",
                }}
            >
                Order List
            </Typography>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: theme.customTheme3 }}
                            >
                                PRODUCT
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: theme.customTheme3 }}
                            >
                                ORDER DATE
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: theme.customTheme3 }}
                            >
                                STATUS
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: theme.customTheme3 }}
                            >
                                CUSTOMER
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: theme.customTheme3 }}
                            >
                                PRICE PER UNIT
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: theme.customTheme3 }}
                            >
                                QUANTITY
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: theme.customTheme3 }}
                            >
                                TOTAL PRICE
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {OrderListData.map((row) => {
                            return (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src={row.img}
                                                alt=""
                                                style={{
                                                    height: "40px",
                                                    width: "40px",
                                                    marginRight: "12px",
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="body2"
                                                    component="h6"
                                                    sx={{ color:  theme.customTheme3, fontSize: "15px" }}
                                                >
                                                    {row.product.id}
                                                </Typography>
                                                <Typography
                                                    variant="body"
                                                    component="h4"
                                                    sx={{
                                                        color:  theme.customTheme,
                                                        fontSize: "15px",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {row.product.name}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body"
                                            component="body"
                                            sx={{ color:  theme.customTheme3, fontSize: "12px" }}
                                        >
                                            {row.orderdate.time}
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            component="body"
                                            sx={{
                                                color:  theme.customTheme,
                                                fontSize: "15px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {row.orderdate.date}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            component="body"
                                            sx={{
                                                color: row.status === "Success" ?  theme.customTheme4 :  theme.customTheme11,
                                                fontSize: "15px",
                                                backgroundColor:
                                                    row.status === "Success" ? "#d3f5ec" : "#fff3da",
                                                padding: "5px 20px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            {row.status}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            component="body"
                                            sx={{
                                                color:  theme.customTheme,
                                                fontSize: "15px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {row.customer.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="body"
                                            sx={{ color:  theme.customTheme3, fontSize: "12px" }}
                                        >
                                            {row.customer.location}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            component="body"
                                            sx={{
                                                color:  theme.customTheme,
                                                fontSize: "15px",
                                                fontWeight: "bold",
                                                alignItems: "right",
                                            }}
                                        >
                                            {row.priceperunit}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            component="body"
                                            sx={{
                                                color:  theme.customTheme,
                                                fontSize: "15px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {row.quantity}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            component="bod"
                                            sx={{
                                                color:  theme.customTheme1,
                                                fontSize: "185x",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {row.totalprice}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
