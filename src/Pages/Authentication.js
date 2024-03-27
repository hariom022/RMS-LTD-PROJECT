import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import {TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";



const Authentication = () => {

  const[rolesData,setRoleData]=useState([
    { id: 1, role: 'Admin', description: 'Full access to all features',createdTime:"27-7-2021" },
  { id: 2, role: 'Manager', description: 'Limited access with management privileges',createdTime:"22-6-2021 "},
  { id: 3, role: 'Employee', description: 'Limited access for regular employees',createdTime:"10-01-2021" },
  ])

  const deleteUserHandler=(id)=>{
    const res = rolesData.filter((rolesData)=>rolesData.id !== id)
    setRoleData(res)
  }

  return (
    <Box sx={{ display: {sm:"block", md:'block', lg:'flex'}}}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "110px", overflowX:'auto' }}>
        <Box sx={{ml:'60px'}}>
        <Typography sx={{m:'20px 0px'}}>Grant access to your Inventory by adding users and setting their roles to control who can do what. An agency can create Admins, Managers, Supervisors and General Users.</Typography>
        <Box sx={{display:'flex', justifyContent:'space-between', }}>
        <TextField
        label="Search by Role"
        variant="outlined"
        style={{ marginBottom: '20px' ,background:'#fff'}}
      />
      <Link to={'/signup'}>
      <Button variant="contained" sx={{height:"60px", background:'#2982cc'}}>+Add New User</Button>
      </Link>
        </Box>
      
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Created Time <br/> UTC</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rolesData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.createdTime}</TableCell>
              <TableCell><Link style={{cursor:'pointer'}}><EditIcon sx={{color:'#2982cc'}}/></Link>  <Link style={{cursor:'pointer'}}><DeleteIcon sx={{color:'#e63434'}} onClick={()=>deleteUserHandler(row.id)}/></Link></TableCell>
              

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

export default Authentication;
