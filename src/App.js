import React from 'react'
import { Grid } from '@material-ui/core'
import SideMenu from './components/SideMenu'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={1}>
        <SideMenu />
      </Grid>

      <Dashboard />

    </Grid>
  )
}

export default App;