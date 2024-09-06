import { createContext, ReactNode, useState } from "react";

type Theme = {
    theme: "light" | "dark"
    toggleTheme: () => void;
};

const ThemeContext = createContext<Theme>({} as Theme);

const ThemeProvider = (props: { children: ReactNode }): ReactNode => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    const toggleTheme = () => {
        const newTheme = (theme == "dark" ? "light" : "dark");
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { props.children }
        </ThemeContext.Provider>
    );
};


export { ThemeContext, ThemeProvider };