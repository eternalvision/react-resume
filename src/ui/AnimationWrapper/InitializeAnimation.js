export const InitializeAnimation = ({ componentType }) => {
    let animation = {
        initial: {},
        animate: {},
        exit: {},
        duration: null,
        ease: null,
        delay: null,
    };

    switch (componentType) {
        case "Header":
            animation.initial = { y: -80 };
            animation.animate = { y: 0 };
            animation.exit = { y: -80 };
            animation.duration = 0.5;
            animation.ease = "easeInOut";
            animation.delay = 0;
            break;
        case "AboutMe":
            animation.initial = { scale: 0.9, filter: "blur(5px)" };
            animation.animate = { scale: 1, filter: "blur(0px)" };
            animation.exit = { scale: 0.9, filter: "blur(5px)" };
            animation.duration = 0.2;
            animation.ease = "easeInOut";
            animation.delay = 0;
            break;
        default:
            animation.initial = {
                opacity: 0.5,
            };
            animation.animate = {
                opacity: 1,
            };
            animation.exit = {
                opacity: 0.5,
            };
            animation.duration = 0.5;
            animation.ease = "easeInOut";
            animation.delay = 0;
    }

    return animation;
};
