import {Button, Grid, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../animations/landinganimation/data'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leftHeroContainer: {
    minWidth: '25em',
  },
  leftHeroText: {
    textAlign: 'center',
    marginBottom: '1em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0.5em',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  freeBtn: {
    ...theme.buttons.estimate,
  },
  learnBtn: {
    ...theme.buttons.outlined_rounded,
    marginLeft: 40,
  },
  rightHeroContainer: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
}))

const HeroBlock = () => {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <Grid container className={classes.heroContainer}>
        <Grid sm item className={classes.leftHeroContainer}>
          <Typography variant='h2' className={classes.leftHeroText}>
            Bringing West Coast Technology
            <br /> to the Midwest
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant='contained' className={classes.freeBtn}>
              Free Estimate
            </Button>
            <Button
              variant='outlined'
              endIcon={<ArrowForwardIcon />}
              className={classes.learnBtn}
            >
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid sm item className={classes.rightHeroContainer}>
          <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
        </Grid>
      </Grid>
    </>
  )
}

export default HeroBlock
