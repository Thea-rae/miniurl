import React from 'react'
import { Grid, Typography, IconButton, Card, CardContent, CardActions, Button } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import MediaQuery from 'react-responsive'
const styles = {
  container: {
    marginTop: '1.5em',
  },
  rows: {
    height: '2em',
    marginTop: '.5em'
  },
  header: {
    height: '1.5em',
    marginTop: '3em',
  },
  url: {
    overflow: 'scroll'
  },
  card:{
    margin: '1.5em auto',
    width: '80%',
  },
}

const UrlList = ({
  urls,
  deleteUrl
}: any) => {
  return (
    <Grid container justify='space-around' style={styles.container}>
      <MediaQuery minWidth={768}>
        <Grid container direction='row' justify='space-around' style={styles.header}>
          <Grid item sm={3}>
            <Typography variant='h5'>Mini</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant='h5'>Source</Typography>
          </Grid>
          <Grid item sm={1}>
            <Typography variant='h5'>Action</Typography>
          </Grid>
        </Grid>
        {urls.length !== 0 && urls.map((url:any, index:number) =>(
          <Grid container direction='row' justify='space-around' key={index} style={styles.rows}>
            <Grid item sm={3}>
              <Typography variant='body1'>{url.short_url}</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant='body1' style={styles.url}>{url.url}</Typography>
            </Grid>
            <Grid item sm={1}>
              <IconButton onClick={() => deleteUrl(url.slug)} aria-label='delete'> <DeleteForever/> </IconButton>
            </Grid>
          </Grid>
        ))}
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        {urls.length !== 0 && urls.map((url:any, index:number) =>(
          <Card key={index} style={styles.card}>
            <CardContent>
              <Typography variant='body1'>Mini: {url.short_url}</Typography>
              <Typography variant='caption' style={styles.url}>Source: {url.url}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => deleteUrl(url.slug)} variant='text'> Delete </Button>
            </CardActions>
          </Card>
        ))}
      </MediaQuery>
    </Grid>
  )
}

export default UrlList