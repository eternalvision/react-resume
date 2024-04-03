import { useContext } from "react";
import "./style.scss";

export const LanguageSwitcher = ({ LanguageContext, Data }) => {
    const { selectedLang, setSelectedLang } = useContext(LanguageContext);

    const handleLangChange = (value) => {
        setSelectedLang(value);
    };

    return (
        <ul className="LanguageList">
            {Data.Localization().map(({ text }) => {
                return (
                    <li
                        key={text}
                        className={`${text} ${
                            selectedLang === text
                                ? "ActiveLanguage"
                                : "InActiveLanguage"
                        }`}
                        onClick={() => handleLangChange(text)}>
                        {text}
                    </li>
                );
            })}
        </ul>
    );
};
