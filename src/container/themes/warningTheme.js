import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const warningTheme = createTheme({
  palette: {
    primary: {
      main: variables.warningColor,
    },
    secondary: {
      main: variables.primaryColor,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default warningTheme;
