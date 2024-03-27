import {
  Paper,
  Grid,
  IconButton,
  Box,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";
import { BarChart } from "@mui/x-charts";
import "./Home.scss";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CountUp from "react-countup";
import { columns, createData, rows } from "../tableData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import {
  facebookChart,
  twitterChart,
  linkedinChart,
  eventDataChart,
  clintLineData,
  salesLineData,
  barChartData,
  inventoryAreaChart,
  
} from "../chartData";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  LineChart,
  Line,
  Legend,
  ComposedChart,
  ReferenceLine,
  ResponsiveContainer,
  ReferenceDot
} from "recharts";
import { Bar } from "recharts";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: 20,
    borderRadius: "10px 10px 0x 10 !important",
  },
  chartContainer: {
    width: "100%",
    height: 300,
  },
  chartContainer: {
    position: "relative",
  },
  facebookIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    opacity: 0.5,
    fontSize: 50,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const classes = useStyles();

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

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }}>
        <Box sx={{ marginLeft: "60px" }}>
          {/* ------------------------------------------------------------------------------ */}

          <Grid container spacing={2} className="home-chart">
            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                sx={{ background: "#1a1ac2", color: "#fff", height: "200px" }}
              >
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ p: "0px 0px 0px 5px" }}>
                      <Typography variant="h5" sx={{ textAlign: "start",fontWeight:"bold" }}>
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
                  <div className={classes.chartContainer}>
                    <LineChart
                      width={730}
                      height={250}
                      data={clintLineData}
                      margin={{ top: 10, bottom: 0 }}
                    >
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" r={10} dataKey="pv" stroke="#fff" fillOpacity={0.3} fill="#fff"/>
                       
                    </LineChart>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                sx={{
                  backgroundColor: "var(--cui-info, #2982cc)",
                  backgroundImage:
                    "linear-gradient(45deg, ( #39f) 0%, var(--cui-info-stop, #2982cc 100%))",
                  color: "#fff",
                  height: "200px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ p: "0px 0px 0px 5px" }}>
                      <Typography variant="h5" sx={{ textAlign: "start",fontWeight:"bold" }}>
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
                  <div className={classes.chartContainer}>
                    <LineChart
                      width={730}
                      height={250}
                      data={salesLineData}
                      margin={{ top: 10, bottom: 0 }}
                    >
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" r={10} dataKey="pv" stroke="#fff" fillOpacity={0.3} fill="#fff" />
                    </LineChart>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                sx={{
                  backgroundColor: "var(--cui-warning, #f6960b)",
                  backgroundImage:
                    "linear-gradient(45deg, var(--cui-warning-start, #f9b115) 0%, var(--cui-warning-stop, #f6960b 100%))",
                  color: "#fff",
                  height: "200px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ p: "0px 0px 0px 5px" }}>
                      <Typography variant="h5" sx={{ textAlign: "start",fontWeight:"bold" }}>
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
                  <div className={classes.chartContainer}>
                    <AreaChart
                      width={480}
                      height={200}
                      data={inventoryAreaChart}
                    >
                      {/* <CartesianGrid strokeDasharray="3 3" /> */}
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                sx={{
                  backgroundColor: "var(--cui-warning, #d93737)",
                  backgroundImage:
                    "linear-gradient(45deg, var(--cui-danger-start, #e55353) 0%, var(--cui-danger-stop, #d93737 100%))",
                  color: "#fff",
                  height: "200px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ p: "0px 0px 0px 5px" }}>
                      <Typography variant="h5" sx={{ textAlign: "start",fontWeight:"bold" }}>
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
                  <div className={classes.chartContainer}>
                    <ComposedChart width={730} height={250} data={barChartData}>
                      <Tooltip />
                      <Legend />

                      <Area
                        type="monotone"
                        dataKey="amt"
                        fill="#8884d8"
                        stroke="#8884d8"
                      />
                      <Bar dataKey="pv" barSize={20} fill="#fff" opacity={0.3}/>
                    </ComposedChart>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* ----------------------------------------------------------------------------- */}
          <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
              <Grid item md={3} sm={6} xs={12}>
                <Card
                  className={classes.card}
                  sx={{ height: "200px", width: "100%" }}
                >
                  <CardContent className="facebook-logo">
                    <div className={classes.chartContainer}>
                      <AreaChart width={480} height={200} data={facebookChart}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}

                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center !import",
                        }}
                      >
                        <FacebookIcon
                          className={classes.facebookIcon}
                          sx={{
                            fontSize: "69px !important",
                            opacity: "1.5",
                            color: "#fff",
                            textAlign: "center",
                            top: "20%",
                            left: "40%",
                            right: "25%",
                          }}
                        />
                      </Box>
                    </div>
                  </CardContent>
                </Card>
                <Box
                  sx={{
                    borderRadius: "0px 0px 4px 4px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff",fontWeight:"bold" }}>
                      89K
                    </Typography>
                    <Typography>FRIENDS</Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff" ,fontWeight:"bold"}}>
                      459
                    </Typography>
                    <Typography>FEED</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <Card
                  className={classes.card}
                  sx={{ height: "200px", width: "100%" }}
                >
                  <CardContent className="twitter-logo">
                    <div className={classes.chartContainer}>
                      <AreaChart width={480} height={200} data={twitterChart}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}

                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                          opacity={0.7}
                        />
                      </AreaChart>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center !import",
                        }}
                      >
                        <TwitterIcon
                          className={classes.facebookIcon}
                          sx={{
                            fontSize: "69px !important",
                            opacity: "1.5",
                            color: "#fff",
                            textAlign: "center",
                            top: "20%",
                            left: "40%",
                            right: "25%",
                          }}
                        />
                      </Box>
                    </div>
                  </CardContent>
                </Card>
                <Box
                  sx={{
                    borderRadius: "0px 0px 4px 4px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff",fontWeight:"bold" }}>
                      989K
                    </Typography>
                    <Typography>FOLLOWERS</Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff",fontWeight:"bold" }}>
                      792
                    </Typography>
                    <Typography>TWEETS</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <Card
                  className={classes.card}
                  sx={{ height: "200px", width: "100%" }}
                >
                  <CardContent className="linkedin-logo">
                    <div className={classes.chartContainer}>
                      <AreaChart width={480} height={200} data={linkedinChart}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}

                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center !import",
                        }}
                      >
                        <LinkedInIcon
                          className={classes.facebookIcon}
                          sx={{
                            fontSize: "69px !important",
                            opacity: "1.5",
                            color: "#fff",
                            textAlign: "center",
                            top: "20%",
                            left: "40%",
                            right: "25%",
                          }}
                        />
                      </Box>
                    </div>
                  </CardContent>
                </Card>
                <Box
                  sx={{
                    borderRadius: "0px 0px 4px 4px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff",fontWeight:"bold" }}>
                      500
                    </Typography>
                    <Typography>CONTACTS</Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff",fontWeight:"bold" }}>
                      1.292
                    </Typography>
                    <Typography>FEED</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <Card
                  className={classes.card}
                  sx={{ height: "200px", width: "100%" }}
                >
                  <CardContent className="event-logo">
                    <div className={classes.chartContainer}>
                      <AreaChart width={480} height={200} data={eventDataChart}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}

                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center !import",
                        }}
                      >
                        <CalendarMonthIcon
                          className={classes.facebookIcon}
                          sx={{
                            fontSize: "69px !important",
                            opacity: "1.5",
                            color: "#fff",
                            textAlign: "center",
                            top: "20%",
                            left: "40%",
                            right: "25%",
                          }}
                        />
                      </Box>
                    </div>
                  </CardContent>
                </Card>
                <Box
                  sx={{
                    borderRadius: "0px 0px 4px 4px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff",fontWeight:"bold" }}>
                      12+
                    </Typography>
                    <Typography>EVENTS</Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h6" sx={{ background: "#fff",fontWeight:"bold" }}>
                      4
                    </Typography>
                    <Typography>MEETING</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>


          {/* ---------------------------------------------------------------------------------- */}
          <Box sx={{ marginTop: "80px" }}>
            <Paper sx={{ width: "100%", overflowX: "auto" }}>
              <Typography
                sx={{ margin: "10px 20px", fontWeight: "bold" }}
                variant="h5"
              >
                {" "}
                Inventory Data
              </Typography>
              <Divider />
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
    </Box>
  );
};

export default Home;
