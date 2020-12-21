import { createMuiTheme } from '@material-ui/core/styles';
import { orange, purple, red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: purple[400],
    },
  },
})