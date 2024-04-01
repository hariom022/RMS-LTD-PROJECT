import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Invoice = () => {
  const nevigate = useNavigate();
  return (
    <Box sx={{ display: { sm: "block", md: "block", lg: "flex" } }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }} className="main">
        <Box sx={{ml:'60px'}}>
        <Typography
          variant="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            className="invoice-text"
            variant="h6"
            sx={{ background: "#1a1ac2", color: "#fff", borderRadius: "10px", width: "40%" }}
          >
            Invoice
          </Typography>
        </Typography>
        <Box sx={{ border: "2px solid black", mt: "5%", background: "#fff" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: "10px 20px",
            }}
          >
            <Typography variant="div">
              <Typography>Invoice No :INV20231</Typography>
              <Typography>Customer: Health Portal Project</Typography>
            </Typography>
            <Typography variant="div">
              <Typography>Date : 05/12/2023</Typography>
              <Typography>Due Date : 05/01/2024</Typography>
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ padding: "80px 20px 0px 20px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan={3}
                      sx={{ fontWeight: "bold" }}
                    >
                      Details
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Price
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Description
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Quantity
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Rate
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.desc}>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell align="center">{row.qty}</TableCell>
                      <TableCell align="center">{row.unit}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(row.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2} sx={{ fontWeight: "bold" }}>
                      Subtotal
                    </TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceSubtotal)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax</TableCell>
                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                      0
                    )} %`}</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceTaxes)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">
                      ${ccyFormat(invoiceTotal)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", m: "20px 0px" }}
          className="btn"
        >
          <Button className="approve-btn">Approve</Button>
          <Link>
            <Button className="reject-btn" onClick={() => nevigate(-1)}>
              Reject
            </Button>
          </Link>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Invoice;
