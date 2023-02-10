type themes = 'light' | 'dark';

export const getTheme = (): themes => {
  if (typeof localStorage !== undefined && localStorage.getItem("theme")) {
    const localStorageTheme = localStorage.getItem("theme");

    return returnLightIfMalformed(localStorageTheme);
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
};

const returnLightIfMalformed = (theme: string | null): themes => {
  if (theme === "light" || theme === "dark") {
    return theme;
  }
  return 'light';
}

export const setTheme = (theme: 'light' | 'dark') => {
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  window.localStorage.setItem("theme", theme);
}

export const setPreferredTheme = () => {
  const theme = getTheme();
  setTheme(theme);
};