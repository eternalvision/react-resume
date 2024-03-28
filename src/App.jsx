import { Header, Main, Footer } from "./components";

import "./styles/root.scss";
import "./styles/App.scss";

export const App = ({ Context, Hooks, UI }) => {
    return (
        <>
            <Header Context={Context} />
            <article className="PositionBackplate">
                <img className="PositionImg" src="/public/resume.jpg" alt="" />
                <section className="PositionBlock">
                    <Main UI={UI} />
                    <Footer />
                </section>
            </article>
        </>
    );
};
