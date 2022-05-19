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
} from "@mui/material";
import { OrderListData } from "../Data";

export default function OrderList() {
    return (
        <Box>
            <Typography
                component="h6"
                variant="h6"
                sx={{
                    padding: "0px 8px",
                    fontSize: "18px",
                    color: "#383874",
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
                                sx={{ minWidth: "100px", fontSize: "13px", color: "#a7a7c2" }}
                            >
                                PRODUCT
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: "#a7a7c2" }}
                            >
                                ORDER DATE
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: "#a7a7c2" }}
                            >
                                STATUS
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: "#a7a7c2" }}
                            >
                                CUSTOMER
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: "#a7a7c2" }}
                            >
                                PRICE PER UNIT
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: "#a7a7c2" }}
                            >
                                QUANTITY
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: "100px", fontSize: "13px", color: "#a7a7c2" }}
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
                                                    sx={{ color: "#a7a7c2", fontSize: "15px" }}
                                                >
                                                    {row.product.id}
                                                </Typography>
                                                <Typography
                                                    variant="body"
                                                    component="h4"
                                                    sx={{
                                                        color: "#383874",
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
                                            sx={{ color: "#a7a7c2", fontSize: "12px" }}
                                        >
                                            {row.orderdate.time}
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            component="body"
                                            sx={{
                                                color: "#383874",
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
                                                color: row.status === "Success" ? "#29cea1" : "#ffc962",
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
                                                color: "#383874",
                                                fontSize: "15px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {row.customer.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="body"
                                            sx={{ color: "#a7a7c2", fontSize: "12px" }}
                                        >
                                            {row.customer.location}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            component="body"
                                            sx={{
                                                color: "#383874",
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
                                                color: "#383874",
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
                                                color: "#21cc9e",
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
