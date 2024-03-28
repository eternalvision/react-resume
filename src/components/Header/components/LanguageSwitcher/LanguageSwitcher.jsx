import { useContext } from "react";
import "./style.scss";

export const LanguageSwitcher = ({ LanguageContext }) => {
    const { selectedLang, setSelectedLang } = useContext(LanguageContext);

    const handleLangChange = (value) => {
        setSelectedLang(value);
    };

    return (
        <ul className="LanguageList">
            <li
                className={`${
                    selectedLang === "en"
                        ? "ActiveLanguage"
                        : "InActiveLanguage"
                }`}
                onClick={() => handleLangChange("en")}>
                en
            </li>
            <li
                className={`${
                    selectedLang === "cs"
                        ? "ActiveLanguage"
                        : "InActiveLanguage"
                }`}
                onClick={() => handleLangChange("cs")}>
                cs
            </li>
            <li
                className={`${
                    selectedLang === "ua"
                        ? "ActiveLanguage"
                        : "InActiveLanguage"
                }`}
                onClick={() => handleLangChange("ua")}>
                ua
            </li>
            <li
                className={`${
                    selectedLang === "ru"
                        ? "ActiveLanguage"
                        : "InActiveLanguage"
                }`}
                onClick={() => handleLangChange("ru")}>
                ru
            </li>
        </ul>
    );
};
