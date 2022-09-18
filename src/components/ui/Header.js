import {AppBar, Button, Tab, Tabs, Toolbar, useScrollTrigger} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../../assets/logo.svg'

const routes = [
  {name: 'Home', link: '/', activeIndex: 0},
  {name: 'Services', link: '/services', activeIndex: 1},
  {name: 'The Revolution', link: '/revolution', activeIndex: 2},
  {name: 'About Us', link: '/about', activeIndex: 3},
  {name: 'Contact Us', link: '/contact', activeIndex: 4},
]

function ElevationScroll(props) {
  const {children} = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logoContainer: {
    height: '7em',
  },
  logo: {
    height: '100%',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: 50,
    marginRight: 25,
    height: 45,
    borderRadius: 50,
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const route = routes.find((r) => r.link === location.pathname)
    if (route) {
      setTabValue(route.activeIndex)
    }
  }, [location.pathname])

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Link to='/' className={classes.logoContainer}>
              <img alt='company logo' src={logo} className={classes.logo} />
            </Link>
            <Tabs value={tabValue} className={classes.tabContainer} indicatorColor='primary'>
              {routes.map((route) => (
                <Tab
                  key={route.activeIndex}
                  component={Link}
                  to={route.link}
                  className={classes.tab}
                  label={route.name}
                />
              ))}
            </Tabs>
            <Button variant='contained' color='secondary' className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
