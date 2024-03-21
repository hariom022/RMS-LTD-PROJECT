import { Typography, Box } from "@mui/material";
import React,{useState} from "react";
import Sidebar from "../component/Sidebar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';


const NewRequest = () => {

  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');
  
  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    setData([...data, newItem]);
    setNewItem('');
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "80px" }}>
        <Box>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <TextField
          label="New Item"
          variant="outlined"
          value={newItem}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddItem}>
          Add Item
        </Button>
      </div>
        </Box>
      </Box>
    </Box>
  );
};

export default NewRequest;
