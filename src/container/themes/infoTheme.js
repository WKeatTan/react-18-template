import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const infoTheme = createTheme({
  palette: {
    primary: {
      main: variables.infoColor,
    },
    secondary: {
      main: variables.primaryColor,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default infoTheme;
