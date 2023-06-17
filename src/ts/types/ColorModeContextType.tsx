import { createContext } from 'react';

export type ColorModeContextType = {
  toggleColorMode: () => void;
};
export const ColorModeContext = createContext<ColorModeContextType | null>(
  null
);
