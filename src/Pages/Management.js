import { Typography, Box, Divider, TableContainer } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Button from "@mui/material/Button";
import "./Management.scss";
import { Link } from "react-router-dom";

const Management = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: 102,
      Quotation: "QTN-001",
      sales: "SN-123456",
      obd: "OBD-789012",
      amount: "$432.50",
    },
    {
      id: 103,
      Quotation: "QTN-002",
      sales: "SN-123457",
      obd: "OBD-789013",
      amount: " $332.50",
    },
    {
      id: 104,
      Quotation: "QTN-003",
      sales: "SN-123458",
      obd: "OBD-789014",
      amount: "$542.50",
    },
    {
      id: 105,
      Quotation: "QTN-004",
      sales: "SN-123459",
      obd: "OBD-789015",
      amount: " $872.50",
    },
  ]);

  const rejectDataHandler = (id) => {
    const res = dummyData.filter((dummyData) => dummyData.id !== id);
    setDummyData(res);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }}>
        <Typography
          variant="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
          className="management-text"
            variant="h6"
            sx={{ background: "#1a1ac2", color: "#fff", borderRadius: "10px" }}
          >
            Delivery / Good Receipt
          </Typography>
        </Typography>
       
          <Paper >
          <TableContainer component={Paper} style={{ maxHeight: 400, marginTop:'50px' }}>
            <Table
              stickyHeader
              aria-label=" "
              sx={{ mt: "20px", overflowX: "auto" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                    Request No{" "}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                    Quotation No{" "}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {" "}
                    Sales Number{" "}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                    OBD No{" "}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                    Total Amount{" "}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {" "}
                    Approve or Delete{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData.map((item) => (
                  <TableRow key={item.id} className="management-container">
                    <TableCell align="center">{item.id}</TableCell>
                    <TableCell align="center">{item.Quotation}</TableCell>
                    <TableCell align="center">{item.sales}</TableCell>
                    <TableCell align="center">{item.obd}</TableCell>
                    <TableCell align="center">{item.amount}</TableCell>
                    <TableCell align="center">
                      <Box>
                        <Link to={"/goodRecipts"}>
                          <Button className="approve-btn">Approve</Button>
                        </Link>
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
        
      </Box>
    </Box>
  );
};

export default Management;
