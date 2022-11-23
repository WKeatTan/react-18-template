/* eslint-disable import/no-cycle */
import { createTheme } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

import variables from 'Assets/scss/_variables.scss';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: grey[400],
      main: grey[700],
      dark: grey[900],
      contrastText: '#fff',
    },
    secondary: {
      light: grey[700],
      main: grey[700],
      dark: grey[700],
      contrastText: '#fff',
    },
    background: {
      paper: variables.darkColor,
      default: variables.darkColor,
      appBar: variables.darkColor,
      contentFrame: variables.darkColor,
      chip: variables.darkColor,
      avatar: variables.darkColor,
      tabs: variables.darkColor,
    },
  },
  typography: {
    useNextVariants: true,
    button: {
      fontWeight: 400,
      textAlign: 'capitalize',
    },
  },
});

export default darkTheme;
