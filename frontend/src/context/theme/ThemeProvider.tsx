import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "yelplight");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
