import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import revolutionBackground from '../assets/repeatingBackground.svg'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '50em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: '25em',
    padding: '10em',
    borderRadius: 15,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      padding: '8em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '2em',
      paddingRight: '2em',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontFamily: 'Pacifico',
    fontWeight: 500,
  },
  learnBtn: {
    ...theme.buttons.outlined_rounded,
    fontSize: '0.8rem',
    height: 35,
    width: 135,
    marginTop: '1em',
  },
}))

const RevolutionBlock = () => {
  const classes = useStyles()

  return (
    <>
      <Link id='revolution' />
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant='h3' className={classes.title} gutterBottom>
              The Revolution
            </Typography>
            <Typography variant='subtitle1'>
              Visionary insights coupled with cutting-edge technology is a
              recipe for revolution.
            </Typography>
            <Button
              variant='outlined'
              endIcon={<ArrowForwardIcon />}
              className={classes.learnBtn}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default RevolutionBlock
