import { Typography, Box, Button, Divider, TableContainer } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";
import './NewRequest.scss'
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


const NewRequest = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: 102,
      Quotation: "QTN-001",
      amount: "$432.50",
    },
    {
      id: 103,
      Quotation: "QTN-002",

      amount: " $332.50",
    },
    {
      id: 104,
      Quotation: "QTN-003",

      amount: "$542.50",
    },
    {
      id: 105,
      Quotation: "QTN-004",

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
        <Box sx={{display:'flex',justifyContent:'center', m:'0px 0px 40px 0px'}}>
        <Typography className="qtn-approv-text" variant="h6" sx={{background: "#1a1ac2",borderRadius:'10px', textAlign:"center",color:'#fff'}} >Quotation Approval Section</Typography>
        </Box>
        
        <Box>
        <Paper>
          <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Quotation</TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Amount</TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Approve or Reject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((item) => (
            <TableRow key={item.id} className="newRequest-container">
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.Quotation}</TableCell>
              <TableCell align="center">{item.amount}</TableCell>
              <TableCell align="center">
                <Box>
                  <Link to={'/quotationDetails'}>
                  <Button className="approve-btn">Approve </Button>
                  </Link>
                  <Button className="reject-btn" onClick={()=>rejectDataHandler(item.id)}>Reject</Button>
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
    </Box>
  );
};

export default NewRequest;
