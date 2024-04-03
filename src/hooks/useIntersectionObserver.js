import { useState, useEffect } from "react";

export const useIntersectionObserver = (ref, options = { threshold: 0.2 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [ref, options]);

    return isVisible;
};
