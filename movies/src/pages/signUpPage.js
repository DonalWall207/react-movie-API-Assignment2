import React from "react";
import SignUpForm from "../components/signUp";
import { Box } from "@mui/system";

const SignUpPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 20
        }}>
            <SignUpForm></SignUpForm>
        </Box>
        
    )
}

export default SignUpPage;