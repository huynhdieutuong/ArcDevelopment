import {Grid, makeStyles} from '@material-ui/core'
import React from 'react'
import CallToActionBlock from './CallToActionBlock'
import HeroBlock from './HeroBlock'
import InformationBlock from './InformationBlock'
import RevolutionBlock from './RevolutionBlock'
import SevicesBlock from './SevicesBlock'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <Grid direction='column' container className={classes.mainContainer}>
      <Grid item>
        <HeroBlock />
      </Grid>
      <Grid item>
        <SevicesBlock />
      </Grid>
      <Grid item>
        <RevolutionBlock />
      </Grid>
      <Grid item>
        <InformationBlock />
      </Grid>
      <Grid item>
        <CallToActionBlock />
      </Grid>
    </Grid>
  )
}

export default LandingPage
