import React from "react";
import { Box, Typography,Button } from "@mui/material";
import Sidebar from "../component/Sidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";
import './QuotationDetails.scss'

const columns = [
  { id: "ProductCode", label: "Product Code", minWidth: 100, align: "center" },
  {
    id: "ProductType",
    label: "Product Type",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "UOM",
    label: "UOM",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Rate",
    label: "Rate",
    minWidth: 100,
    align: "center",
  },
  {
    id: "Total",
    label: "Total",
    minWidth: 100,
    align: "center",
  },
];
function createData(
  ProductCode,
  ProductType,
  UOM,
  Quantity,

  Rate,
  Total
) {
  return {
    ProductCode,
    ProductType,
    UOM,
    Quantity,

    Rate,
    Total,
  };
}

const rows = [
  createData("ABC123", "Product A", "EA", 50, "$14", "$700"),
  createData("ZAS123", "Product B", "KG", 15, "$20", "$300"),
  createData("DFF123", "Product C", "KG", 20, "$25", "$500"),
];
const QuotationDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  const nevigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }}>
        <Box sx={{display:'flex',justifyContent:'center', m:'0px 0px 40px 0px'}}>
        <Typography variant="h6" sx={{background: "#1a1ac2",borderRadius:'10px', width:'20%' , textAlign:"center",color:'#fff', width:'40%'}}>Quotation Details</Typography>

        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" ,mb:'20px'}}>
            <Typography sx={{color:'#fff', background: "rgba(0, 0, 21, 0.2)",p:'10px' }}>Request No : 123</Typography>
            <Typography sx={{color:'#fff', background: "rgba(0, 0, 21, 0.2)",p:'10px'}}>Quotation ID :QTN-001</Typography>
            <Typography sx={{color:'#fff', background: "rgba(0, 0, 21, 0.2)",p:'10px'}}>Date : 05/06/2023</Typography>
          </Box>
          <Box>
            <Paper sx={{ width: "100%", overflowX: "auto" }}>
              <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          <Typography style={{ fontWeight: "bold" }}>
                            {column.label}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
          <Typography sx={{border:'2px solid black', textAlign:'end', p:'10px'}}>Total Quotation  Amount = $1500.00</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" ,mt:'50px' }} className="quotation-container">
                  <Link to={"/detailedGoodReceipt"}>
                    <Button className="approve-btn">Approve</Button>
                  </Link>
                  <Button
                    className="reject-btn"
                  onClick={()=>nevigate(-1)}
                  >
                    Reject
                  </Button>
                </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotationDetails;
