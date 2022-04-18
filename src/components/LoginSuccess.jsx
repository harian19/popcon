import * as React from 'react';
import './LoginSuccess.css'
import { Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function LoginSuccess () {

    return (
        <Grid container>
            <Grid item xs={4}/>
            <Grid item xs={4}>
            <div className="login-success-container">
                <Typography align="center">
                    Log In Success!
                    <br/>
                    <Link to="/item">
                        Go To Item Page
                    </Link>
                </Typography>
            </div>
            </Grid>
            <Grid item xs={4}/>
        </Grid>
    );
}