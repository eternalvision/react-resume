import { AboutMe } from "./components";
import { AnimatePresence } from "framer-motion";

import "./style.scss";

export const Main = ({ UI, Hooks }) => {
    const { InfoComponent, AnimationWrapper } = UI;
    const { useIntersectionObserver } = Hooks;

    return (
        <AnimationWrapper
            useIntersectionObserver={useIntersectionObserver}
            componentType="Main"
            mode="observer"
            className="Main">
            <AnimatePresence>
                <AnimationWrapper
                    useIntersectionObserver={useIntersectionObserver}
                    componentType="AboutMe"
                    mode="observer"
                    className="AboutMe">
                    <AboutMe InfoComponent={InfoComponent} />
                </AnimationWrapper>
                <div className="Dash"></div>
            </AnimatePresence>
        </AnimationWrapper>
    );
};
