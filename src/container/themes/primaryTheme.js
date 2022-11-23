import { createTheme } from '@mui/material/styles';

import variables from 'Assets/scss/_variables.scss';

const primaryTheme = createTheme({
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
    /** Use the system font instead of the default Roboto font. */
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'Heebo', 'sans-serif'].join(','),
    htmlFontSize: 16,
    h2: {
      fontSize: 21,
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

export default primaryTheme;
