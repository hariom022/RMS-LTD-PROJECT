import { Typography, Box, Button } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import './InventoryUpdate.scss'
const columns = [
  { id: "ProductCode", label: "Product Code", minWidth: 100, align: "center" },
  { id: "Description", label: " Description", minWidth: 100, align: "center" },
  {
    id: "UOM",
    label: "UOM",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Site",
    label: "Site/Hospital Id",
    minWidth: 100,
    align: "center",
  },
  {
    id: "Consumption",
    label: "Consumption",
    minWidth: 100,
    align: "center",
  },
  {
    id: "OpenStock",
    label: "Open Stock",
    minWidth: 100,
    align: "center",
  },
];
function createData(
  ProductCode,
  Description,
  UOM,
  OpenStock,
  Consumption,
  Site
) {
  return {
    ProductCode,
    Description,
    UOM,
    OpenStock,
    Consumption,
    Site,
  };
}

const rows = [
  createData("ABC123", "Product A", "EA", 100, 30, "Site 1"),
  createData("ZAS123", "Product B", "KG", 200, 10, "Site 1"),
  createData("DFF123", "Product C", "KG", 400, 11, "Site 1"),
  createData("MHG123", "Product D", "KG", 100, 23, "Site 1"),
  createData("DER123", "Product E", "KG", 400, 44, "Site 1"),
  createData("YJO123", "Product F", "EA", 200, 25, "Site 1"),
  createData("YTG123", "Product G", "EA", 555, 60, "Site 1"),
  createData("CFD123", "Product H", "EA", 432, 60, "Site 1"),
];

const InventoryUpdate = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box sx={{ display: { sm: "block", md: "block", lg: "flex" } }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: "110px" }}
        className="main"
      >
        <Box sx={{ marginLeft: "40px" }}>
          <Typography
            variant="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              className="good-receipt"
              variant="h6"
              sx={{
                background: "#1a1ac2",
                color: "#fff",
                borderRadius: "10px",
                mb: "20px",
              }}
            >
              Inventory Update
            </Typography>
          </Typography>
          <Box
          
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: "10px 0px",
            }}
            className='inventory-btn'
          >
            <Button variant="contained" color="secondary" className="inventory-add-field-btn">
              + Add New Field
            </Button>
            <Typography variant="div" className="inventory-update-btn">
              <Button variant="contained" sx={{ m: "0px 5px" }}>
                Download File
              </Button>
              <Button variant="contained" sx={{m:"5px"}}>Upload File</Button>
            </Typography>
          </Box>
          <Paper sx={{ width: "100%" }} className="table-container">
            <TableContainer sx={{ maxHeight: 600, overflowX: "auto" }} >
              <Table
                stickyHeader
                aria-label="sticky table"
                sx={{ overflowX: "auto" }}
              >
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default InventoryUpdate;
