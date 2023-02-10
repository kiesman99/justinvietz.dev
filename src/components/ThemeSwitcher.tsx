import { useEffect, useState } from "react";
import { getTheme } from "../scripts/theme";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button onClick={toggleTheme} className={`dark:text-white`}>{theme === "light" ? "[Dark]" : "[Light]"}</button>
    </>
  );
}
