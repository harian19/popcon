import * as React from 'react';
import './Header.css'
import { Button, Grid, TextField, Typography } from '@mui/material';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

export default function Header() {
  return (
    <div className="header-container">
      <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Grid item xs={2}>
          <div className="search-box" >
            <TextField 
              label="Search" 
              variant="outlined" 
              size='small'/>
          </div>
        </Grid >
        <Grid item xs={8}>
          <Typography align="center" variant="h2">
            {/* popCon */}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div className="sign-out">
            <Button variant="contained" startIcon={<LogoutSharpIcon/>} disabled>
              Sign Out
            </Button>
          </div>
        </Grid >
      </Grid>
    </div>
  );
}
