import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import colors from './colors';

export const themeOptions: ThemeOptions = {
  colors,
  palette: {
    type: 'dark',
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
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
    },
    MuiStepper: {
      root: {
        background: colors.background,
        padding: 0
      }
    }
  }
};

const theme = createMuiTheme(themeOptions);

export default theme;
