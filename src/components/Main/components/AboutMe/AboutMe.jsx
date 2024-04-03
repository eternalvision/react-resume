import { useContext } from "react";
import "./style.scss";

export const AboutMe = ({ InfoComponent, AboutMeData, Context }) => {
    const { selectedLang } = useContext(Context.LanguageContext);
    const {
        firstName,
        secondName,
        profession,
        placeOfBirth,
        title,
        profileTitle,
    } = AboutMeData()[selectedLang];

    return (
        <ul className="AboutMeList">
            <li className="AboutMeListItem">
                <ul className="ContactInfoList">
                    <li className="ContactInfoListItem">
                        <img
                            className="MyImage"
                            src="/Me.jpg"
                            alt={`${firstName} ${secondName}`}
                        />
                    </li>
                    <li className="ContactInfoListItem">
                        <section className="MainInfoBlock">
                            <ul className="MainInfo">
                                <li className="Specialty">{profession}</li>
                                <li>al.pryadchenko@gmail.com</li>
                                <li>+420607443987</li>
                                <li>Zinkovska 1852/2 Prague, 10000, Czech</li>
                            </ul>
                        </section>
                        <section className="PersonalInfoBlock">
                            <ul>
                                <li>{title.date_place}</li>
                                <li>29.05.2001 / {placeOfBirth}</li>
                            </ul>
                            <ul>
                                <li>{title.driving}</li>
                                <li>B</li>
                            </ul>
                            <ul>
                                <li>{title.nationality}</li>
                                <li>Ukrainian</li>
                            </ul>
                        </section>
                    </li>
                </ul>
            </li>
            <li className="AboutMeListItem">
                <ul className="PersonalList">
                    <li className="Name">
                        <h1>
                            {firstName} <br /> {secondName}
                        </h1>
                    </li>
                    <li>
                        <InfoComponent titleText={title.profile}>
                            <p className="ProfileTitle">{profileTitle}</p>
                        </InfoComponent>
                    </li>
                </ul>
            </li>
        </ul>
    );
};
