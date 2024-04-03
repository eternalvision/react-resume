import AnimatedCursor from "react-animated-cursor";
import { useContext } from "react";

export const CustomCursor = ({ ThemeMode }) => {
    const { theme } = useContext(ThemeMode);

    const outerStyle =
        theme === "dark"
            ? { borderColor: "white", mixBlendMode: "difference" }
            : { borderColor: "white", mixBlendMode: "difference" };

    return (
        <AnimatedCursor
            color={"255,255,255"}
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
