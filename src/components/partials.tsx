import React from 'react'
import { Grid, Typography, AppBar} from '@material-ui/core'

const styles = {
  appBar: {
    top: 'auto',
    bottom: 0,
  }
}
export const Header = () => (
  <Grid 
    container 
    justify='center'>
    <Typography 
      variant='h2'>
      MiniUrlz
    </Typography>
  </Grid>
)

export const Footer = () => (
  <AppBar style={styles.appBar}> 
    <Grid 
      container 
      justify='center'>
      <Typography 
        variant='caption'>
        Made for the homies in 2020
      </Typography>
    </Grid>
  </AppBar>
)