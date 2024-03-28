import { useContext } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import "./style.scss";

export const ThemeSwitcher = ({ DarkModeContext }) => {
    const { theme, setTheme } = useContext(DarkModeContext);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <button className="ThemeButton" onClick={toggleTheme}>
            {theme === "light" ? <RiSunFill /> : <RiMoonClearFill />}
        </button>
    );
};
