import { Theme } from '@material-ui/core/styles';
import colors from 'styles/colors';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: typeof colors;
  }
  interface ThemeOptions {
    colors: typeof colors;
  }
}
