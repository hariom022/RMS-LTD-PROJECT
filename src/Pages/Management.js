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
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: "100%",
    overflowX: "auto",
  },
});
const Management = ({ data }) => {
  const classes = useStyles();
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
    {
      id: 106,
      Quotation: "QTN-005",
      sales: "SN-1234544",
      obd: "OBD-789016",
      amount: " $543.50",
    },
    {
      id: 107,
      Quotation: "QTN-006",
      sales: "SN-1234532",
      obd: "OBD-789017",
      amount: " $653.50",
    },
    {
      id: 108,
      Quotation: "QTN-007",
      sales: "SN-1234564",
      obd: "OBD-789018",
      amount: " $883.50",
    },
  ]);

  const rejectDataHandler = (id) => {
    const res = dummyData.filter((dummyData) => dummyData.id !== id);
    setDummyData(res);
  };
  return (
    <Box sx={{ display: { sm: "block", md: "block", lg: "flex" } }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }} className="main">
        <Box sx={{ marginLeft: "50px" }}>
          <Typography
            variant="div"
            sx={{ display: "flex", justifyContent: "center", width:'100%' }}
          >
            <Typography
              className="management-text"
              variant="h6"
              sx={{
                background: "#1a1ac2",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Delivery / Good Receipt
            </Typography>
          </Typography>

          <TableContainer
            component={Paper}
            className={classes.tableContainer}
            style={{
              maxWidth: "100%",
              maxHeight: 600,
              marginTop: "20px",
              overflowX: "auto",
            }}
          >
            <Table stickyHeader aria-label=" " sx={{ mt: "20px" }}>
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
                        <NavLink to={"/goodRecipts"}>
                          <Button className="approve-btn">Approve</Button>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Management;
