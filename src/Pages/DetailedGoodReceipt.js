import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './DetailedGoodReceipt.scss'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const DetailedGoodReceipt = () => {
  const classes = useStyles();
  const [dummyData, setDummyData] = useState([
    {
      requestNo: "REQ-001",
      Quotation: "QTN-001",
      sales: "SN-123456",
      obd: "OBD-789012",
      date: "[GR Date]",
      sku: "[Total SKU Quantity]",
    },
  ]);

  const [dummyData1, setDummyData1] = useState([
    {
      productCode: "ABC123",
      productType: "Product A",
      quantity: 20,
      UOM: "ES",
      rate: "$10.00",
      total: "$200",
    },
    {
      productCode: "DEF456",
      productType: "Product B",
      quantity: 20,
      UOM: "ES",
      rate: "$20.00",
      total: "$300",
    },
  ]);

  const nevigate = useNavigate();

  return (
    <Box sx={{ display: {sm:"block", md:'block', lg:'flex'} }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }} className="main">
        <Box sx={{ml:'60px'}}>
        <Typography
          variant="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            className="detailed-good-text"
            variant="h6"
            sx={{textAlign:'center', background: "#1a1ac2", color: "#fff", borderRadius: "10px",p:"5px 10px",width:'30%' }}
          >
            Detailed Goods Receipt
          </Typography>
        </Typography>
        <Box
          sx={{ marginTop: "50px", background: "#fff", borderRadius: "10px" }}
        >
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold", pt: "20px" }}
          >
            Detailed Good Receipt #012
          </Typography>
          {dummyData.map((item, index) => {
            return (
              <Box
                sx={{
                  display: {sm:'block', md:'flex'},
                  justifyContent: {sm:'center', md:"space-around"},
                  margin: "20px 0px",
                  textAlign:'center'
                }}
              >
                <Box>
                  <Typography sx={{ pb: "10px" }}>
                    Request No :{item.requestNo}
                  </Typography>
                  <Typography sx={{ pb: "10px" }}>
                    Sales Number :{item.sales}
                  </Typography>
                  <Typography sx={{ pb: "10px" }}>
                    Date :{item.sales}
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <Typography sx={{ pb: "10px" }}>
                    Quotation No :{item.Quotation}
                  </Typography>
                  <Typography sx={{ pb: "10px" }}>
                    OBD No :{item.obd}
                  </Typography>
                  <Typography sx={{ pb: "10px" }}>
                    SKU Quantity :{item.sku}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className="detailed">
         
            <TableContainer
              component={Paper}  
              style={{ maxHeight: 400, marginTop: "50px",overflowX: 'auto',}}
            >
              <Table
              className={classes.table}
                stickyHeader
                aria-label=" "
                sx={{ mt: "20px", overflowX: "auto" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      Product Code{" "}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      Product Type{" "}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Quantity{" "}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      UOM{" "}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      Rate{" "}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      Total{" "}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyData1.map((item) => (
                    <TableRow key={item.id} className="management-container">
                      <TableCell align="center">{item.productCode}</TableCell>
                      <TableCell align="center">{item.productType}</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell align="center">{item.UOM}</TableCell>
                      <TableCell align="center">{item.rate}</TableCell>
                      <TableCell align="center">{item.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              sx={{
                textAlign: "end",
                p: "20px 60px",
                border: "2px solid gray",
              }}
            >
              <Typography>Total Received Quantity : 40</Typography>
              <Typography>Total Receipt Amount : $400</Typography>
            </Box>
    

          <Box
            sx={{ display: "flex", justifyContent: "center", m: "50px 0px" }}
          >
            <Button className="approve-btn">Approve</Button>

            <Button className="reject-btn" onClick={() => nevigate(-1)}>
              Reject
            </Button>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailedGoodReceipt;
