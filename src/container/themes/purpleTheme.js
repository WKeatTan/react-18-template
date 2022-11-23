import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const purpleTheme = createTheme({
  palette: {
    primary: {
      main: variables.purpleColor,
    },
    secondary: {
      main: variables.primaryColor,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default purpleTheme;
