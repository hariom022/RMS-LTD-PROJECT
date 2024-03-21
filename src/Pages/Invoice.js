import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";



const Invoice = () => {


  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "80px" }}>
        <Box>
          <Typography variant="h6"
            sx={{ background: "#fbb2b2", borderRadius: "50px" }}>Invoice</Typography>
        </Box>
        <Box>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography variant="div">
              <Typography>Invoice No :INV20231</Typography>
              <Typography>Customer: Health Portal Project</Typography>
            </Typography>
            <Typography variant="div">
              <Typography>Date : 05/12/2023</Typography>
              <Typography>Due Date : 05/01/2024</Typography>
            </Typography>
          </Box>
          <Box>
         
          </Box>
        </Box>
     
      </Box>
    </Box>
  );
};

export default Invoice;
