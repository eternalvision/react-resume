import { useState, useEffect } from "react";

export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) setScrollDirection("down");
            else if (currentScrollY < lastScrollY) setScrollDirection("up");
            lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, []);

    return scrollDirection;
};
