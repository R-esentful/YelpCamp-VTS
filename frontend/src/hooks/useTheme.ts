import { themeContext } from "context/theme";
import { useContext, useEffect } from "react";

const useTheme = () => {
  const theme = useContext(themeContext);

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
