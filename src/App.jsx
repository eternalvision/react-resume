import { Header, Main, Footer } from "./components";
import { AnimatePresence } from "framer-motion";

import "./styles/root.scss";
import "./styles/App.scss";

export const App = ({ Context, Hooks, UI, Data }) => {
    return (
        <>
            <AnimatePresence>
                <Header Data={Data} Context={Context} UI={UI} Hooks={Hooks} />
            </AnimatePresence>
            <article className="PositionBackplate">
                <img className="PositionImg" src="/resume.jpg" alt="" />
                <section className="PositionBlock">
                    <AnimatePresence>
                        <Main
                            Data={Data}
                            Context={Context}
                            UI={UI}
                            Hooks={Hooks}
                        />
                    </AnimatePresence>
                    <Footer />
                </section>
            </article>
            <UI.CustomCursor ThemeMode={Context.DarkModeContext} />
        </>
    );
};
