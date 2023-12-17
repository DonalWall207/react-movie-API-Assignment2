import React from "react";
import LoginForm from "../components/loginForm";
import { Box } from "@mui/system";

const LoginPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 20
        }}>
            <LoginForm></LoginForm>
        </Box>
        
    )
}

export default LoginPage;