import { Typography, Box } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { PieChart } from '@mui/x-charts/PieChart';
import './Reports.scss'


// ---------------------------------Bar charts-----------------
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    salse: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    salse: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    salse: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    salse: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    salse: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    salse: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    salse: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    salse: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    salse: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    salse: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    salse: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    salse: 25,
    month: 'Dec',
  },
];

// --------------------------------------Pie Charts-----------------
const data = [
  { id: 0, value: 4000, label: 'India' },
  { id: 1, value: 6543, label: 'United Kingdom' },
  { id: 2, value: 5698, label: 'Singapore' },
  { id: 3, value: 3098, label: 'Us' },
];

const valueFormatter = (value) => `${value}$`;

const chartSetting = {
  yAxis: [
    {
      label: 'Sales ($)',
    },
  ],
  series: [{ dataKey: 'salse', label: 'Sales in Months', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

// -------------------------------Bar charts 2-------------------

const chartSetting2 = {
  xAxis: [
    {
      label: ' World Wide Production(in $)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset2 = [
  {
    sale: 21,
    country: 'Zimbabwe',
  },
  {

    sale: 28,
    country: 'Vietnam',
  },
  {
 
    sale: 41,
    country: 'Italy',
  },
  {
   
    sale: 73,
    country: 'Finland',
  },
  {
   
    sale: 99,
    country: 'Eritrea',
  },
  {
   
    sale: 144,
    country: 'Egypt',
  },
  {
    
    sale: 319,
    country: 'Austria',
  },
  {
    
    sale: 249,
    country: 'Australia',
  },
  {
    
    sale: 131,
    country: 'Singapore',
  },
  {
    
    sale: 55,
    country: 'UK',
  },
  {
    
    sale: 48,
    country: 'India',
  },
  {

    sale: 25,
    country: 'US',
  },
];

const valueFormatter2 = (value) => `${value}mm`;
const Reports = () => {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
  return (
    <Box sx={{ display: { sm: "block", md: "block", lg: "flex" }  }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px" }} className="main">
     <Box sx={{ml:'60px'}}>
     <div style={{ width: '100%' }}>
     
     <BarChart
       dataset={dataset}
       xAxis={[
         { scaleType: 'band', dataKey: 'month', tickPlacement, tickLabelPlacement },
       ]}
       {...chartSetting}
     />
   </div>
   <div style={{marginTop:'50px'}}>
     <Typography sx={{textAlign:'center',marginBottom:"20px",marginLeft:'-76px'}}>Salse In Countries($)</Typography>
   <PieChart
     series={[
       {
         data,
         highlightScope: { faded: 'global', highlighted: 'item' },
         faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
       },
     ]}
     height={200}
   />
   </div>
   <div style={{display:'flex', justifyContent:'center', margin:'50px 0px'}}>
   <BarChart
     dataset={dataset2}
     yAxis={[{ scaleType: 'band', dataKey: 'country' }]}
     series={[{ dataKey: 'sale', label: 'World Wide Production', valueFormatter2 }]}
     layout="horizontal"
     grid={{ vertical: true }}
     {...chartSetting2}
   />
   </div>
     </Box>
      </Box>
    </Box>
  );
};

export default Reports;
