import * as React from 'react';
import './LoginForm.css'
import { Button, Grid, TextField } from '@mui/material';
import { Navigate } from "react-router-dom";
import { ReactDOM } from "react";
import Review from "./Review";

export default function LoginForm () {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isSignedIn, setIsSignedIn] = React.useState(false);

    function signIn(username, password) {
        setIsSignedIn(true);
    }

    function register(username, password) {
        setIsSignedIn(true);
    }

    if (isSignedIn)
    {
        return <Navigate to="/success"/>
    }

    return (
        <Grid container>
            <Grid item xs={4}/>
            <Grid item xs={4}>
            <div className="login-form-container">
                <div className="username-box">
                    <TextField 
                    label="Username" 
                    fullWidth 
                    value={username} 
                    onKeyDown={(e) => e.key === 'Enter' ? signIn(username, password) : null}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="password-box">
                    <TextField 
                    type="password"
                    label="Password" 
                    fullWidth 
                    value={password} 
                    onKeyDown={(e) => e.key === 'Enter' ? signIn(username, password) : null}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="login-buttons">
                    <Button 
                    variant="contained"
                    onClick={() => signIn(username, password)}>
                        Sign In
                    </Button>
                    <Button 
                    variant="outlined"
                    onClick={() => register(username, password)}>
                        Register
                    </Button>
                </div>
            </div>
            </Grid>
            <Grid item xs={4}/>
        </Grid>
    );
}