import { createContext, useEffect, useRef } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children, Hooks }) => {
    const { useLocalStorageState } = Hooks;
    const bodyRef = useRef(document.body);

    const [theme, setTheme] = useLocalStorageState({
        key: "theme",
        initialValue: "light",
    });

    useEffect(() => {
        const { current } = bodyRef;
        current.classList.remove("light", "dark");
        current.classList.add(theme);
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{ theme, setTheme }}>
            {children}
        </DarkModeContext.Provider>
    );
};
