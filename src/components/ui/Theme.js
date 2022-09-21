import {createTheme} from '@material-ui/core'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'

let theme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      white: 'white',
      grey: arcGrey,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
})

theme = createTheme(theme, {
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      color: theme.palette.common.white,
      fontSize: '1rem',
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: theme.palette.primary.main,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: '700',
      color: theme.palette.primary.main,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: '300',
      color: theme.palette.common.grey,
    },
  },
  buttons: {
    estimate: {
      borderRadius: 50,
      height: 45,
      width: 145,
      textTransform: 'none',
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    outlined_rounded: {
      borderRadius: 50,
      borderWidth: 2,
      height: 45,
      width: 145,
      textTransform: 'none',
      color: theme.palette.primary.main,
      fontSize: '0.9rem',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      borderColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
  },
})

export default theme
