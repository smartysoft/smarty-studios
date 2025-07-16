import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};
