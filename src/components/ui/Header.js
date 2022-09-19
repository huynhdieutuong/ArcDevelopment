import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import React, {useEffect, useMemo, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import MenuIcon from '@material-ui/icons/Menu'

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
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.8em',
    },
  },
  logoContainer: {
    height: '7em',
    [theme.breakpoints.down('md')]: {
      height: '6em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  menuItemSelected: {
    opacity: 1,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: 50,
    width: 50,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItemText: {
    ...theme.typography.tab,
  },
  drawerItem: {
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const location = useLocation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [tabValue, setTabValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const routes = useMemo(
    () => [
      {name: 'Home', link: '/', activeIndex: 0},
      {
        name: 'Services',
        link: '/services',
        activeIndex: 1,
        ariaControl: 'simple-menu',
        ariaHaspopup: true,
        mouseOver: (e) => handleClickMenu(e),
      },
      {name: 'The Revolution', link: '/revolution', activeIndex: 2},
      {name: 'About Us', link: '/about', activeIndex: 3},
      {name: 'Contact Us', link: '/contact', activeIndex: 4},
    ],
    []
  )

  const menuOptions = useMemo(
    () => [
      {name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0},
      {
        name: 'Custom Software Development',
        link: '/customsoftware',
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: 'iOS/Android App Development',
        link: '/mobileapps',
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: 'Website Development',
        link: '/websites',
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  )

  useEffect(() => {
    const route =
      routes.find((r) => r.link === location.pathname) ||
      menuOptions.find((o) => o.link === location.pathname)
    if (route) {
      setTabValue(route.activeIndex)
      setSelectedOption(route.selectedIndex)
    }
  }, [routes, menuOptions, location.pathname])

  const tabs = (
    <>
      <Tabs
        value={tabValue}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        {routes.map((route) => (
          <Tab
            key={route.activeIndex}
            component={Link}
            to={route.link}
            className={classes.tab}
            label={route.name}
            aria-controls={route.ariaControl}
            aria-haspopup={route.ariaHaspopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button variant='contained' color='secondary' className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        MenuListProps={{
          onMouseLeave: handleCloseMenu,
        }}
        classes={{paper: classes.menu}}
        style={{zIndex: theme.zIndex.modal + 2}}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option) => (
          <MenuItem
            key={option.selectedIndex}
            component={Link}
            to={option.link}
            onClick={handleCloseMenu}
            classes={{
              root: classes.menuItem,
              selected: classes.menuItemSelected,
            }}
            selected={option.selectedIndex === selectedOption}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <IconButton
        onClick={() => setOpenDrawer(true)}
        className={classes.drawerIconContainer}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.activeIndex}
              divider
              button
              component={Link}
              to={route.link}
              onClick={() => setOpenDrawer(false)}
              selected={route.activeIndex === tabValue}
              classes={{
                root: classes.drawerItem,
                selected: classes.drawerItemSelected,
              }}
            >
              <ListItemText
                className={classes.drawerItemText}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            className={classes.drawerItemEstimate}
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  )
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar disableGutters>
            <Link to='/' className={classes.logoContainer}>
              <img alt='company logo' src={logo} className={classes.logo} />
            </Link>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
