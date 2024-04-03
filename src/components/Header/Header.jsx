import { ThemeSwitcher, LanguageSwitcher } from "./components";
import "./style.scss";

export const Header = ({ Context, Hooks, UI, Data }) => {
    const { DarkModeContext, LanguageContext } = Context;
    const { AnimationWrapper } = UI;
    const { useScrollDirection } = Hooks;
    return (
        <AnimationWrapper
            useScrollDirection={useScrollDirection}
            mode="scroll"
            componentType="Header"
            className="Header">
            <ul className="HeaderList">
                <li className="Logo">s.p.</li>
                <li className="InterfaceSettings">
                    <ThemeSwitcher DarkModeContext={DarkModeContext} />
                    <LanguageSwitcher
                        Data={Data}
                        LanguageContext={LanguageContext}
                    />
                </li>
            </ul>
        </AnimationWrapper>
    );
};
