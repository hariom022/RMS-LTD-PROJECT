import { Typography, Box, Divider } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";

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
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "80px" }}>
        <Typography
          variant="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="h6"
            sx={{ background: "#fbb2b2", borderRadius: "50px" }}
          >
            Delivery / Good Receipt
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
              className="management-container"
            >
              <Typography sx={{ textAlign: "center" }} className="request">
                Request No <br /> # {item.id}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ textAlign: "center" }} className="quotation">
                  Quotation No. :<br /> {item.Quotation}
                </Typography>
                <Typography sx={{ textAlign: "center" }} className="quotation">
                  Sales Number :<br /> {item.sales}
                </Typography>
                <Typography sx={{ textAlign: "center" }} className="quotation">
                  OBD No. : <br /> {item.obd}
                </Typography>
              </Box>
              <Typography sx={{ textAlign: "center" }} className="amount">
                Total Amount :{item.amount}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            </Box>
            <br />
            <Divider sx={{ color: "black", width: "100%" }} />
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Management;
