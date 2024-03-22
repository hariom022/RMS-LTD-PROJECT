import { Typography, Box } from "@mui/material";
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

const columns = [
  { id: "MaterialNumber", label: "Material Number", minWidth: 100 ,align: "center"},
  { id: "MatrialDescription", label: "Matrial Description", minWidth: 100,align: "center", },
  {
    id: "MaterialGroup",
    label: "Material Group",
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
    id: "ProductStatus",
    label: "Product Status",
    minWidth: 100,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "SiteNumber",
    label: "Site Number",
    minWidth: 100,
    align: "center",
    
  },
  {
    id: "MinStock",
    label: "Min Stock",
    minWidth: 100,
    align: "center",
    
  },
  {
    id: "MaxStock",
    label: "Max Stock",
    minWidth: 100,
    align: "center",
  
  },
  {
    id: "RecoderPt",
    label: "Recoder Pt",
    minWidth: 100,
    align: "center",
    
  },
];
function createData(
  MaterialNumber,
  MatrialDescription,
  MaterialGroup,
  UOM,
  ProductStatus,
  SiteNumber,
  MinStock,
  MaxStock,
  RecoderPt
) {
  return {
    MaterialNumber,
    MatrialDescription,
    MaterialGroup,
    UOM,
    ProductStatus,
    SiteNumber,
    MinStock,
    MaxStock,
    RecoderPt
  };
}

const rows = [
  createData("ABC123", "Product A", "Group 1", "EA", "Active","Site 1",30,100,10),
  createData("ZAS123", "Product B", "Group 2", "KG", "Active","Site 1",10,200,20),
  createData("DFF123", "Product C", "Group 3", "KG", "Active","Site 1",11,400,70),
  createData("MHG123", "Product D", "Group 4", "KG", "Active","Site 1",23,100,20),
  createData("DER123", "Product E", "Group 5", "KG", "Active","Site 1",44,400,30),
  createData("YJO123", "Product F", "Group 6", "EA", "Active","Site 1",25,200,10),
  createData("YTG123", "Product G", "Group 7", "EA", "Active","Site 1",60,555,44),
  createData("CFD123", "Product H", "Group 8", "EA", "Active","Site 1",60,432,20),
  createData("MJH123", "Product I", "Group 9", "EA", "Active","Site 1",20,543,80),
  createData("XCF123", "Product F", "Group 1", "EA", "Active","Site 1",10,100,20),
  createData("NHG123", "Product G", "Group 3", "KG", "Active","Site 1",30,543,52),
  createData("ARD123", "Product H", "Group 2", "KG", "Active","Site 1",80,743,54),
  createData("DEF123", "Product I", "Group 6", "EA", "Active","Site 1",10,659,20),
  createData("MAL123", "Product J", "Group 7", "EA", "Active","Site 1",40,333,60),
  createData("DET123", "Product K", "Group 5", "KG", "Active","Site 1",50,120,55),
];

const MasterData = () => {
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
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" ,overflowX: 'auto'}}>
        <Paper sx={{ width: "100%", overflowX: 'auto'  }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow >
                  {columns.map((column) => (
                    <TableCell
                    
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <Typography style={{ fontWeight: 'bold' }}>{column.label}</Typography>
                      
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody >
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
  );
};

export default MasterData;
