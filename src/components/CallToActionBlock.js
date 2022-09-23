import {Button, Grid, makeStyles, Typography} from '@material-ui/core'
import React from 'react'

import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '50em',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5em',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  title: {},
  subTitle: {
    color: theme.palette.common.white,
  },
  learnBtn: {
    ...theme.buttons.outlined_rounded,
    fontSize: '0.8rem',
    height: 35,
    width: 135,
  },
  freeBtn: {
    ...theme.buttons.estimate,
  },
  itemRight: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3em',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}))

const CallToActionBlock = () => {
  const classes = useStyles()

  return (
    <>
      <Link id='call-to-action' />
      <Grid container className={classes.container}>
        <Grid item className={classes.item}>
          <Typography variant='h3' className={classes.title} gutterBottom>
            Simple Software.
            <br />
            Revolutionary Results.
          </Typography>
          <Typography variant='subtitle1' className={classes.subTitle}>
            Take advantage of the 21st Century.
          </Typography>
          <Button
            variant='outlined'
            endIcon={<ArrowForwardIcon />}
            className={classes.learnBtn}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item className={[classes.item, classes.itemRight]}>
          <Button variant='contained' className={classes.freeBtn}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default CallToActionBlock
