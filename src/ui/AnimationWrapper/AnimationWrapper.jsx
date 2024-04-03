import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InitializeAnimation } from "./InitializeAnimation";
import { useIntersectionObserver, useScrollDirection } from "../../hooks";

export const AnimationWrapper = ({
    className,
    children,
    componentType,
    mode,
}) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const observerVisibility = useIntersectionObserver(ref);
    const scrollDirection = useScrollDirection();

    useEffect(() => {
        if (mode === "observer") {
            setIsVisible(observerVisibility);
        } else if (mode === "scroll") {
            setIsVisible(scrollDirection === "up");
        }
    }, [observerVisibility, scrollDirection, mode]);

    const { initial, animate, exit, duration, ease, delay } =
        InitializeAnimation({
            componentType,
        });

    return (
        <motion.section
            ref={ref}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            exit="exit"
            variants={{ initial, animate, exit }}
            transition={{
                duration,
                ease,
                delay,
            }}
            className={className}>
            {children}
        </motion.section>
    );
};
