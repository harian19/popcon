import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from './Header';
import { consoleLogger, newRelicLogger} from "../misc/ClickHandlers";
import ClickObserver from "../misc/ClickObserver";
import { Pages } from "../Constants";

export default function AppContainer(props) {

  var clickObserver = new ClickObserver();
  clickObserver.subscribe(consoleLogger);
  clickObserver.subscribe(newRelicLogger);

  if (props.pageName === Pages.Login)
    clickObserver.fire("Login Page Visited");
  else if (props.pageName === Pages.Review)
    clickObserver.fire("Review Page Visited");
  else if (props.pageName === Pages.Item)
    clickObserver.fire("Item Page Visited");
  else if (props.pageName === Pages.User)
    clickObserver.fire("User Page Visited");

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
