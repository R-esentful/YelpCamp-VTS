import { themeContext } from "./theme";
import { useState } from "react";

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "yelplight");
  return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
}
export default ThemeContextProvider;
