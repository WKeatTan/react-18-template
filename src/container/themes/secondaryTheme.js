import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const successTheme = createTheme({
  palette: {
    primary: {
      main: variables.secondaryColor,
    },
    secondary: {
      main: variables.primaryColor,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default successTheme;
