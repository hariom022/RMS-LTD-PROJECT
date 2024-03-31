import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import './LoginForms.scss'
import { Link } from "react-router-dom";


const LoginForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform login logic, such as sending the email and password to a server for authentication
    console.log("Email:", email);
    console.log("Password:", password);
    // You can replace the console.log statements with your actual login logic
  };
  return (
    <Container maxWidth="xs" sx={{marginTop:'5%'}} className="form-container">
      <Typography variant="h4" align="center" gutterBottom>
        <img src="logo.png" height={80}/>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Link to={'/'}>
        <Button type="submit" variant="contained" color="primary" fullWidth >
          Login
        </Button>
        </Link>
        <Typography sx={{textAlign:'center', mt:'30px'}}>
          Don't have an account ?  <Link to={'/signup'}>Sign Up</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default LoginForms;
