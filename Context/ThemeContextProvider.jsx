import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const themeValues = {
    dark: false,
  };

  const [darkTheme, setDarkTheme] = useState(themeValues.dark);

  const toggleTheme = () => {
    setDarkTheme((curTheme) => !curTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
