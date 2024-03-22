import React from "react";
import Sidebar from "../component/Sidebar";
import { Box, Typography } from "@mui/material";

const DetailedGoodReceipt = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }}>
        <Box>
            <Typography>Detailed Goods Receipt</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailedGoodReceipt;
