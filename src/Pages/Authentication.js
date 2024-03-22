import { Typography, Box } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";

const Authentication = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }}>
        <Typography>Authentication Data</Typography>
      </Box>
    </Box>
  );
};

export default Authentication;
