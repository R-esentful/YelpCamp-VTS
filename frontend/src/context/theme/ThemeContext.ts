import { createContext } from "react";

interface ThemeInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const ThemeContext = createContext<ThemeInterface | undefined>(undefined);

export default ThemeContext;
