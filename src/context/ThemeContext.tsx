import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./theme";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let saved: Theme = "light";
    try {
      if (localStorage.getItem("theme") === "dark") saved = "dark";
    } catch {
      /* Storage is optional. */
    }
    setTheme(saved);
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Theme works without persistence. */
    }
  }, [theme, ready]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
