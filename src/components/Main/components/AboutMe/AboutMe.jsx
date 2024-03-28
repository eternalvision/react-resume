import "./style.scss";

export const AboutMe = ({ InfoComponent }) => {
    return (
        <section className="AboutMe">
            <ul className="AboutMeList">
                <li className="AboutMeListItem">
                    <ul className="ContactInfoList">
                        <li className="ContactInfoListItem">
                            <img
                                className="MyImage"
                                src="/Me.jpg"
                                alt="Sasha Priadchenko"
                            />
                        </li>
                        <li className="ContactInfoListItem">
                            <section className="MainInfoBlock">
                                <ul className="MainInfo">
                                    <li className="Specialty">
                                        Full Stack Web Developer
                                    </li>
                                    <li>al.pryadchenko@gmail.com</li>
                                    <li>+420607443987</li>
                                    <li>
                                        Zinkovska 1852/2 Prague, 10000, Czech
                                    </li>
                                </ul>
                            </section>
                            <section className="PersonalInfoBlock">
                                <ul>
                                    <li>Date / Place of birth</li>
                                    <li>29.05.2001 / Slavyansk</li>
                                </ul>
                                <ul>
                                    <li>Driving Licensy</li>
                                    <li>B</li>
                                </ul>
                                <ul>
                                    <li>Nationality</li>
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
                                Sasha <br /> Priadchenko
                            </h1>
                        </li>
                        <li>
                            <InfoComponent titleText={"Profile"}>
                                <p className="ProfileTitle">
                                    Full-stack web developer with 4 years of
                                    experience in building and maintaining
                                    responsive websites in the recruiting
                                    industry. Proficient in HTML, CSS,
                                    JavaScript; plus modern libraries and
                                    frameworks like React and Node.js.
                                    Passionate about implementing and launching
                                    new projects. Ability to translate business
                                    requirements into technical solutions.
                                    Looking to apply my degree in Automation of
                                    Production Processes and extensive
                                    experience in full-stack development to grow
                                    in a challenging environment.
                                </p>
                            </InfoComponent>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};
