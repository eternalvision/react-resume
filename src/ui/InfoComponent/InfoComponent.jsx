import "./style.scss";

export const InfoComponent = ({ children, titleText }) => {
    return (
        <ul className="InfoComponentList">
            <li className="InfoComponentListTitle">{titleText}</li>
            <li>{children}</li>
        </ul>
    );
};
