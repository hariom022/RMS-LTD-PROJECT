import { Typography, Box, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";
import './NewRequest.scss'

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
        <Typography sx={{background: "#139191",borderRadius:'10px', width:'30%' , textAlign:"center",p:'20px',color:'#fff'}} className="qtn-sec">Quotation Approval Section</Typography>
        </Box>
        
        <Box>
          {dummyData.map((item) => (
            <>
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  textAlign: "center",
                  mt: 5,
                }}
                className="newRequest-container"
              >
                <Typography sx={{ textAlign: "center" }} className="request">
                  Request No <br /> # {item.id}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    sx={{ textAlign: "center" }}
                    className="quotation"
                  >
                    Quotation No. :<br /> {item.Quotation}
                  </Typography>
                </Box>
                <Typography sx={{ textAlign: "center" }} className="amount">
                  Total Amount :{item.amount}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Link to={"/quotation"}>
                    <Button className="approve-btn">Approve</Button>
                  </Link>
                  <Button
                    className="reject-btn"
                    onClick={() => rejectDataHandler(item.id)}
                  >
                    Reject
                  </Button>
                </Box>
              </Box>
              <br />
              <Divider sx={{ color: "black", width: "100%" }} />
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NewRequest;
