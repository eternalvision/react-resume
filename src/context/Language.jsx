import { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage, Hooks }) => {
    const { useLocalStorageState } = Hooks;

    const [selectedLang, setSelectedLang] = useLocalStorageState({
        key: "language",
        initialValue: initialLanguage || "en",
    });

    return (
        <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
            {children}
        </LanguageContext.Provider>
    );
};
