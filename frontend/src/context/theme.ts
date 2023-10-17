import { createContext } from "react";

interface ThemeInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const themeContext = createContext<ThemeInterface | undefined>(undefined);
