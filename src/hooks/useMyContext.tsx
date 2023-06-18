import { useContext } from 'react';
import {
  ColorModeContext,
  ColorModeContextType,
} from '../ts/types/ColorModeContextType';

export const useMyContext = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error(
      'useMyContext must be used within a ColorModeContextProvider'
    );
  }
  return context;
};
