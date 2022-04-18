import * as React from 'react';
import './CardContainer.css'
import { Grid, Paper } from '@mui/material';

export default function CardContainer (props) {
    return (
        <div className="card-container">
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <Paper 
                    elevation={5}
                    className={"card-paper"}>
                        <div className="card-grid-container">
                            {props.children}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
        </div>
        
        
    );
}