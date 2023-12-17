import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const root = {
    width: 500
}

const style = {
    display: "center",
    justifyContent: "center",
    padding: 2,
    maxWidth: 500
}

const SignUpForm = () => {
    const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    navigate("/", { replace: true });
  }

    return (
        <Paper sx={style}>
            <Grid2 component="form" container spacing={2}>
            <Grid2 xs={12}>
                    <TextField id="filled-basic" label="User Name" variant="filled" sx={root} onChange={(event) => {setUserName(event.target.value)}} />
            </Grid2>
            <Grid2 xs={12}>
            <TextField id="filled-basic" label="Password" type="password" variant="filled" sx={root} onChange={(event) => {setPassword(event.target.value)}}  />
                </Grid2>
                <Grid2 xs={12}>
            <TextField id="filled-basic" label="Password" type="password" variant="filled" sx={root} onChange={(event) => {setPasswordAgain(event.target.value)}}  />
                </Grid2>
                <Grid2 sx={2}>
            <Button variant="contained" sx={{ width: 100 }} onClick={register}>Sign Up</Button>
                </Grid2>
            </Grid2 >  
        </Paper>    
    )
}

export default SignUpForm;