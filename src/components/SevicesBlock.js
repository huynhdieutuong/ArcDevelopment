import {Button, Grid, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'

const services = [
  {
    title: 'Custom Software Development',
    sub1: 'Save Energy. Save Time. Save Money.',
    sub2: 'Complete digital solutions, from investigation to <span>celebration.</span>',
    image: customSoftwareIcon,
  },
  {
    title: 'iOS/Android App Development',
    sub1: 'Extend Functionality. Extend Access. Increase Engagement.',
    sub2: 'Integrate your web experience or create a standalone app <br/> with either mobile platform.',
    image: mobileAppsIcon,
    isRight: true,
  },
  {
    title: 'Website Development',
    sub1: 'Reach More. Discover More. Sell More.',
    sub2: 'Optimized for Search Engines, built for speed.',
    image: websitesIcon,
  },
]

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    padding: '5em',
    marginTop: '5em',
  },
  rightItem: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'unset',
    },
  },
  container: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  leftContainer: {
    minWidth: '30em',
    maxWidth: '40em',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  rightContainer: {
    minWidth: '23em',
    maxWidth: '23em',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  learnBtn: {
    ...theme.buttons.outlined_rounded,
    fontSize: '0.8rem',
    height: 35,
    width: 135,
    marginTop: '1em',
  },
  specialText: {
    '& span': {
      fontFamily: 'Pacifico',
      color: theme.palette.secondary.main,
    },
  },
  title: {
    marginBottom: '1em',
  },
}))

const SevicesBlock = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        direction='column'
        className={classes.servicesContainer}
        spacing={8}
      >
        {services.map((service) => (
          <Grid
            key={service.title}
            item
            className={service.isRight && classes.rightItem}
          >
            <Grid container spacing={2} className={classes.container}>
              <Grid md item className={classes.leftContainer}>
                <Typography variant='h3' className={classes.title}>
                  {service.title}
                </Typography>
                <Typography variant='subtitle1'>{service.sub1}</Typography>
                <Typography
                  variant='subtitle1'
                  className={classes.specialText}
                  dangerouslySetInnerHTML={{__html: service.sub2}}
                />
                <Button
                  variant='outlined'
                  endIcon={<ArrowForwardIcon />}
                  className={classes.learnBtn}
                >
                  Learn More
                </Button>
              </Grid>
              <Grid md item className={classes.rightContainer}>
                <img alt={service.title} src={service.image} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default SevicesBlock
