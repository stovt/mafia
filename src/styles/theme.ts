import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import colors from './colors';

export const themeOptions: ThemeOptions = {
  colors,
  palette: {
    type: 'dark',
    primary: {
      main: colors.primary
    },
    background: {
      default: colors.background
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary
    },
    divider: colors.border
  },
  shape: {
    borderRadius: 8
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      containedPrimary: {
        color: colors.buttonText
      }
    },
    MuiInputLabel: {
      asterisk: {
        display: 'none'
      }
    }
  }
};

const theme = createMuiTheme(themeOptions);

export default theme;
