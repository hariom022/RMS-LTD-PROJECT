import { Typography, Box, Divider, Button } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import './GoodReceipt.scss'

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

      const nevigate=useNavigate()
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: "110px", overflowX: "auto" }}
      >
        <Typography
          variant="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="h6"
            sx={{ background: "#fbb2b2", borderRadius: "50px" }}
          >
             Good Receipt
          </Typography>
        </Typography>
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
              className="good-receipt-container"
            >
              <Typography sx={{ textAlign: "center" }} className="request">
                Request No <br /> # {item.id}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ textAlign: "center" }} className="quotation">
                  Quotation No. :<br /> {item.GoodReceipt}
                </Typography>
                <Typography sx={{ textAlign: "center" }} className="quotation">
                  Sales Number :<br /> {item.Invoice}
                </Typography>
              
              </Box>
              
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link to={"/invoice"}>
                  <Button className="approve-btn">Submit</Button>
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
        <Box sx={{textAlign:'center', mt:'20px'}}>
        <Button variant="contained" onClick={()=>nevigate(-1)}>Back</Button>
        </Box>
        
      </Box>
    </Box>
  );
};

export default GoodRecipts;
