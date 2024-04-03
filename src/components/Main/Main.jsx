import { AboutMe } from "./components";

import "./style.scss";

export const Main = ({ Data, Context, UI, Hooks }) => {
    const { InfoComponent, AnimationWrapper } = UI;
    const { useIntersectionObserver } = Hooks;

    return (
        <AnimationWrapper
            useIntersectionObserver={useIntersectionObserver}
            componentType="Main"
            mode="observer"
            className="Main">
            <AnimationWrapper
                useIntersectionObserver={useIntersectionObserver}
                componentType="AboutMe"
                mode="observer"
                className="AboutMe">
                <AboutMe
                    AboutMeData={Data.AboutMe}
                    Context={Context}
                    InfoComponent={InfoComponent}
                />
            </AnimationWrapper>
            <div className="Dash"></div>
        </AnimationWrapper>
    );
};
