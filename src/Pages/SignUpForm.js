import React,{useState} from 'react'
import { Container, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import './SignUpForms.scss'

const SignUpForm = () => {

    const [email, setEmail] = useState("");
    const[username,setUserName]=useState('')
    const[name,setName]=useState('')
    const [password, setPassword] = useState("");
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
      const handleUserNameChange=(event)=>{
        setUserName(event.target.value);

      }

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
    <Container maxWidth="xs" sx={{marginTop:'5%'}} className="signup-form-container">
      <Typography variant="h4" align="center" gutterBottom>
        <img src="logo.png" height={80} />
      </Typography>
      <form onSubmit={handleSubmit}>
      <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={handleNameChange}
          required
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={handleUserNameChange}
          required
        />
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
        </Link>
        <Typography sx={{textAlign:'center', mt:'30px'}}>
           Have an account ?  <Link to={'/login'}>Login</Link>
        </Typography>
      </form>
    </Container>
  )
}

export default SignUpForm
