import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import SideMenu from './components/SideMenu/index'
import Dashboard from './components/Dashboard/index';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden'
  }
})

function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item xs={1}>
        <SideMenu />
      </Grid>

      <Dashboard />

    </Grid>
  )
}

export default App;