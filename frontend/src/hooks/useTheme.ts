import ThemeContext from "@context/theme/ThemeContext";
import { useContext, useEffect } from "react";

const useTheme = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("theme", theme!.theme);
    const localTheme = localStorage.getItem("theme") || "yelplight";
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleChangeTheme = () => {
    theme!.theme === "yelplight" ? theme?.setTheme("yelpdark") : theme?.setTheme("yelplight");
  };

  return handleChangeTheme;
};

export default useTheme;
