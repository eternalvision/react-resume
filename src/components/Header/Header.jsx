import { ThemeSwitcher, LanguageSwitcher } from "./components";
import "./style.scss";

export const Header = ({ Context }) => {
    const { DarkModeContext, LanguageContext } = Context;
    return (
        <header className="Header">
            <ul className="HeaderList">
                <li className="Logo">s.p.</li>
                <li className="InterfaceSettings">
                    <ThemeSwitcher DarkModeContext={DarkModeContext} />

                    <LanguageSwitcher LanguageContext={LanguageContext} />
                </li>
            </ul>
        </header>
    );
};
