import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: variables.primaryColor,
    },
    secondary: {
      main: variables.warningColor,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default lightTheme;
