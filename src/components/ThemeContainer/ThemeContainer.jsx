import { App } from 'components/App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { grey, deepPurple, purple } from '@mui/material/colors';

function getThemeDesign(mode) {
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

const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const useMyContext = () => useContext(ColorModeContext);

export function ThemeContainer() {
  const [mode, setMode] = useState(
    () => JSON.parse(localStorage.getItem('mode')) ?? 'light'
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

  const theme = createTheme(getThemeDesign(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
