import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartContainer, AreaPlot } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import "./Home.scss";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CountUp from "react-countup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

// ------------------------------------bar chart--------------------

const valueFormatter = (value) => `${value}mm`;

// ------------------------------------------------------------------
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

];

const Home = () => {
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

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }}>
        <Box>
          <Grid container spacing={2} className="home-chart">
            <Grid item md={3} sm={6} xs={12}>
              <Item
                sx={{
                  width: "90%",
                  height: "230px",
                  background: "#1a1ac2",
                  color: "#fff",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h5" sx={{ textAlign: "start" }}>
                      <CountUp delay={0.4} end={26} duration={0.6} />K{" "}
                      <span style={{ fontSize: "12px" }}>(-12.4%) </span>
                    </Typography>

                    <Typography
                      sx={{ alignItems: "start", textAlign: "start" }}
                    >
                      Total Clint
                    </Typography>
                  </Box>

                  <IconButton aria-label="settings" sx={{ textAlign: "end" }}>
                    <MoreVertIcon sx={{ textAlign: "end", color: "#fff" }} />
                  </IconButton>
                </Box>

                <LineChart
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5, 2, 8.5],
                    },
                  ]}
                  sx={{ width: "80%" }}
                  height={200}
                />
              </Item>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <Item
                sx={{
                  width: "90%",
                  height: "230px",
                  backgroundColor: "var(--cui-info, #2982cc)",
                  backgroundImage:
                    "linear-gradient(45deg, ( #39f) 0%, var(--cui-info-stop, #2982cc 100%))",
                  color: "#fff",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h5" sx={{ textAlign: "start" }}>
                      $<CountUp delay={0.4} end={123} duration={0.6} />
                      .54
                      <span style={{ fontSize: "12px" }}>(+20.4%) </span>
                    </Typography>

                    <Typography
                      sx={{ alignItems: "start", textAlign: "start" }}
                    >
                      Recent Sales
                    </Typography>
                  </Box>
                  <IconButton aria-label="settings" sx={{ textAlign: "end" }}>
                    <MoreVertIcon sx={{ textAlign: "end", color: "#fff" }} />
                  </IconButton>
                </Box>
                <LineChart
                  series={[
                    {
                      data: [2, 3, 2, 5, 1.5, 3, 0, 3],
                    },
                  ]}
                  sx={{ width: "80%" }}
                  height={200}
                />
              </Item>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Item
                sx={{
                  width: "90%",
                  height: "230px",
                  backgroundColor: "var(--cui-warning, #f6960b)",
                  backgroundImage:
                    "linear-gradient(45deg, var(--cui-warning-start, #f9b115) 0%, var(--cui-warning-stop, #f6960b 100%))",
                  color: "#fff",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h5" sx={{ textAlign: "start" }}>
                      $123554.54{" "}
                      <span style={{ fontSize: "12px" }}>(+543.4%) </span>
                    </Typography>

                    <Typography
                      sx={{ alignItems: "start", textAlign: "start" }}
                    >
                      Total Inventory Values
                    </Typography>
                  </Box>
                  <IconButton aria-label="settings" sx={{ textAlign: "end" }}>
                    <MoreVertIcon sx={{ textAlign: "end", color: "#fff" }} />
                  </IconButton>
                </Box>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      area: true,
                      color: "#fff",
                    },
                  ]}
                  sx={{ width: "100%", opacity: "0.4" }}
                  height={200}
                />
              </Item>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Item
                sx={{
                  width: "90%",
                  height: "230px",
                  backgroundColor: "var(--cui-warning, #d93737)",
                  backgroundImage:
                    "linear-gradient(45deg, var(--cui-danger-start, #e55353) 0%, var(--cui-danger-stop, #d93737 100%))",
                  color: "#fff",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h5" sx={{ textAlign: "start" }}>
                    Low Stock
                    </Typography>

                    <Typography
                      sx={{ alignItems: "start", textAlign: "start" }}
                    >
                      Item 1
                    </Typography>
                  </Box>

                  <IconButton aria-label="settings" sx={{ textAlign: "end" }}>
                    <MoreVertIcon sx={{ textAlign: "end", color: "#fff" }} />
                  </IconButton>
                </Box>
                <BarChart
                  series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                    { data: [4, 5, 6] },
                  ]}
                  width={250}
                  height={190}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "80px" }}>
          <Paper sx={{ width: "100%", overflowX: "auto" }}>
            <Typography sx={{margin:'10px 20px', fontWeight:'bold'}} variant="h5">  Inventory Data</Typography>
            <Divider/>
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

export default Home;
