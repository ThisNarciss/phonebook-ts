import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useMemo, useContext, useEffect } from 'react';
import { grey, deepPurple, purple } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import {
  ColorModeContext,
  ColorModeContextType,
} from '../../ts/types/ColorModeContextType';
import { App } from '../App';

function getThemeDesign(mode: PaletteMode) {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: purple,

            divider: purple[100],
            background: {
              default: purple[100],
              paper: purple[100],
            },

            text: {
              primary: grey[900],
              secondary: grey[900],
            },
          }
        : {
            primary: deepPurple,
            divider: deepPurple[700],
            background: {
              default: deepPurple[700],
              paper: deepPurple[700],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  };
}

export const useMyContext = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error(
      'useMyContext must be used within a ColorModeContextProvider'
    );
  }
  return context;
};

export function ThemeContainer() {
  const [mode, setMode] = useState<PaletteMode | string>(
    () => JSON.parse(localStorage.getItem('mode') as string) ?? 'light'
  );

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = createTheme(getThemeDesign(mode as PaletteMode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
