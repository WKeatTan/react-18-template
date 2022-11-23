import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const blueTheme = createTheme({
  palette: {
    primary: {
      main: variables.infoColor,
    },
    secondary: {
      main: variables.warningColor,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default blueTheme;
