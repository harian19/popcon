import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from './Header';

export default function AppContainer(props) {
  return (
    <div>
      <Grid container rowSpacing={10} spacing={1}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          {props.children}
        </Grid>
        
      </Grid>
    </div>
  );
}
