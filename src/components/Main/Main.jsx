import { AboutMe } from "./components";
import "./style.scss";

export const Main = ({ UI }) => {
    const { InfoComponent } = UI;

    return (
        <main className="Main">
            <AboutMe InfoComponent={InfoComponent} />
            <div className="Dash"></div>
        </main>
    );
};
