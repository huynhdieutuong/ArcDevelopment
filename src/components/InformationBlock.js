import {Button, Grid, makeStyles, Typography} from '@material-ui/core'
import React from 'react'

import infoBackground from '../assets/infoBackground.svg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '50em',
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5em',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  title: {
    color: theme.palette.common.white,
  },
  subTitle: {
    color: theme.palette.common.white,
  },
  learnBtn: {
    ...theme.buttons.outlined_rounded,
    fontSize: '0.8rem',
    height: 35,
    width: 135,
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
    },
  },
  itemRight: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      marginTop: '8em',
    },
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}))

const InformationBlock = () => {
  const classes = useStyles()

  return (
    <>
      <Link id='about' />
      <Link id='contact' />
      <Grid container className={classes.container}>
        <Grid item className={classes.item}>
          <Typography variant='h3' className={classes.title} gutterBottom>
            Aboud Us
          </Typography>
          <Typography variant='subtitle1' className={classes.subTitle}>
            Let's get personal
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
          <Typography variant='h3' className={classes.title} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant='subtitle1' className={classes.subTitle}>
            Say hello!
          </Typography>
          <Button
            variant='outlined'
            endIcon={<ArrowForwardIcon />}
            className={classes.learnBtn}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default InformationBlock
