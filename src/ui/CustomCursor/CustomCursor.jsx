import AnimatedCursor from "react-animated-cursor";
import { useContext } from "react";

export const CustomCursor = ({ ThemeMode }) => {
    const { theme } = useContext(ThemeMode);

    const cursorColor = theme === "dark" ? "rgb(0,0,0)" : "rgb(255,255,255)";
    const outerStyle =
        theme === "dark"
            ? { borderColor: "black", mixBlendMode: "exclusion" }
            : { borderColor: "white", mixBlendMode: "exclusion" };

    return (
        <AnimatedCursor
            color={cursorColor}
            hasBlendMode={true}
            innerSize={8}
            innerScale={1}
            //
            outerSize={45}
            outerScale={2}
            outerAlpha={1}
            outerStyle={outerStyle}
            //
            clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
                ".LanguageList li",
                ".ThemeButton",
                ".InfoComponentList",
                ".ContactInfoListItem img",
                ".Logo",
            ]}
        />
    );
};
