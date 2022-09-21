import {Grid, Hidden, makeStyles} from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const routes = [
  [{name: 'Home', link: '/'}],
  [
    {name: 'Services', link: '/services'},
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobileapps',
    },
    {
      name: 'Website Development',
      link: '/websites',
    },
  ],
  [
    {name: 'The Revolution', link: '/revolution'},
    {name: 'Vision', link: '/vision'},
    {name: 'Technology', link: '/technology'},
    {name: 'Process', link: '/process'},
  ],
  [
    {name: 'About Us', link: '/about'},
    {name: 'History', link: '/history'},
    {name: 'Team', link: '/team'},
  ],
  [{name: 'Contact Us', link: '/contact'}],
]

const socials = [
  {name: 'facebook', link: 'https://www.facebook.com', src: facebook},
  {name: 'twitter', link: 'https://www.twitter.com', src: twitter},
  {name: 'instagram', link: 'https://www.instagram.com', src: instagram},
]

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    zIndex: theme.zIndex.modal + 1,
    position: 'relative',
  },
  adornment: {
    verticalAlign: 'bottom',
    width: '25em',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  gridItem: {
    margin: '3em',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  icon: {
    width: '4em',
    height: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    bottom: '1em',
    right: '1.5em',
    justifyContent: 'flex-end',
    maxWidth: '20em',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <img
        src={footerAdornment}
        alt='black decorative slash'
        className={classes.adornment}
      />
      <Grid container className={classes.mainContainer}>
        <Hidden mdDown>
          {routes.map((route, index) => (
            <Grid key={index} item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                {route.map((r) => (
                  <Grid
                    key={r.name}
                    item
                    component={Link}
                    to={r.link}
                    className={classes.link}
                  >
                    {r.name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Hidden>
      </Grid>
      <Grid container className={classes.socialContainer} spacing={2}>
        {socials.map((social) => (
          <Grid
            item
            key={social.name}
            component={'a'}
            href={social.link}
            rel='noopener noreferrer'
            target='_blank'
          >
            <img src={social.src} alt={social.name} className={classes.icon} />
          </Grid>
        ))}
      </Grid>
    </footer>
  )
}

export default Footer
