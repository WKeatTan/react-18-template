import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const dangerTheme = createTheme({
  palette: {
    primary: {
      main: variables.dangerColor,
    },
    secondary: {
      main: variables.primaryColor,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default dangerTheme;
