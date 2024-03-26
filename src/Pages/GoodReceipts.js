import {
  Typography,
  Box,
  Divider,
  Button,
  TableContainer,
} from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import "./GoodReceipt.scss";

const GoodRecipts = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: 102,
      GoodReceipt: "#012",
      Invoice: "INV-293001",
    },
    {
      id: 103,
      GoodReceipt: "#015",
      Invoice: "INV-203055",
    },
    {
      id: 104,
      GoodReceipt: "#019",
      Invoice: "INV-403551",
    },
  ]);

  const rejectDataHandler = (id) => {
    const res = dummyData.filter((dummyData) => dummyData.id !== id);
    setDummyData(res);
  };

  const nevigate = useNavigate();
  return (
    <Box sx={{ display: { sm: "block", md: "block", lg: "flex" } }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: "110px", overflowX: "auto" }}
      >
        <Box sx={{ ml: "60px" }}>
          <Typography
            variant="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              className="good-receipt"
              variant="h6"
              sx={{
                background: "#1a1ac2",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Good Receipt
            </Typography>
          </Typography>
          <Paper>
            <TableContainer
              component={Paper}
              style={{ maxHeight: 400, marginTop: "50px" }}
            >
              <Table sx={{ mt: "20px", overflowX: "auto" }}>
                <TableHead>
                  <TableRow sx={{ textAlign: "center" }}>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      GoodReceipt
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      Invoice
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      Accept or Reject
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyData.map((item) => (
                    <TableRow key={item.id} className="good-receipt-container">
                      <TableCell align="center">{item.id}</TableCell>
                      <TableCell align="center">{item.GoodReceipt}</TableCell>
                      <TableCell align="center">{item.Invoice}</TableCell>
                      <TableCell align="center">
                        <Box>
                          <NavLink to={"/invoice"}>
                            <Button className="approve-btn">Accept</Button>
                          </NavLink>
                          <Button
                            className="reject-btn"
                            onClick={() => rejectDataHandler(item.id)}
                          >
                            Reject
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Box sx={{ textAlign: "center", mt: "20px" }}>
            <Button variant="contained" onClick={() => nevigate(-1)}>
              Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GoodRecipts;
