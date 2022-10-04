import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CSharp, Css, Cv, Github, Golang, Html, Java, JavaScript, Mail, NodeJS, Php, Reactjs, Space, Sql, TypeScript, VB } from "../general/icons/icons";
import { ContactContainer, IconNtext, Column, ColumnList, SayContainer, Copied } from "./style";

const Contact: FC<{ animationOff: boolean, fixHeader: Function }> = ({ animationOff }) => {
    const [copied, setCopied] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const rootChildren: any = (document.getElementById('root') as HTMLElement).children
    const [t, i18] = useTranslation('global');
    const cves = require("../../assets/cvs/cves.pdf");
    const cven = require("../../assets/cvs/cven.pdf");
    const fixHeader = useCallback(() => { 
        rootChildren[2].style = "display: none"
        rootChildren[3].style = "min-height: calc(100vh - 45px)"
        rootChildren[3].children[0].style = "top: 0"
        rootChildren[3].children[1].style = "top: 0"
    }, [rootChildren]); //fix header style issues


    useEffect(() => {
        if (location.state === "ctcmenu" || // Was changed from menu
            (location.pathname === "/contact" && // on refresh ->
                !animationOff)) { // Wait until the animation is off
                    console.log(location.state)
            fixHeader();
            // Was not changed from scroll
            if (location.state !== "fromScroll") ref.current?.scrollIntoView();
        }
    }, [location, animationOff, fixHeader])

    useEffect(() => {
        //clean location.state before closing / refreshing
        window.addEventListener("beforeunload", () => navigate("."));
        return () => window.removeEventListener("beforeunload", () => navigate("."));
    }, [navigate])

    const handleEmailClick = () => {
        setCopied(true);
        navigator.clipboard.writeText("herberthbustamante@gmail.com");
        setTimeout(() => setCopied(false), 2500)
    }

    return (
        <ContactContainer ref={ref}  >
            <h1>{t("contact.title")}</h1>
            <Column description>
                <p>{t("contact.description")}</p>

                <Space width="100%" height="80px" />

                <SayContainer>
                    <h3>{t("contact.say")}</h3>

                    <div>
                        <IconNtext pointer onClick={handleEmailClick} >
                            <Copied show={copied}>{t("contact.copied")}</Copied>
                            <Mail />
                            herberthbustamante<wbr />@gmail.com
                        </IconNtext>

                        <IconNtext>
                            <Link
                                to={i18.language === "es" ? cves : cven}
                                target="_blank"
                                download={"Herberth Bustamante " + (i18.language === "es" ? "Desarrollador Web" : "WebDeveloper")}
                            >
                                <Cv />
                                {t("contact.view")}
                            </Link>
                        </IconNtext>

                        <IconNtext>
                            <a
                                href="https://github.com/sublimexf"
                                target="_blank"
                            >
                                <Github />
                                Github
                            </a>
                        </IconNtext>
                    </div>
                </SayContainer>

            </Column>

            <Space width="100%" height="1px" />
            <h2>{t("contact.knowledge")}</h2>

            <ColumnList>
                <ul>
                    <li>
                        <IconNtext>
                            <Reactjs />
                            React
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <JavaScript />
                            JavaScript
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <TypeScript />
                            TypeScript
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <Css />
                            Css
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <Html />
                            Html
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <NodeJS />
                            NodeJS
                        </IconNtext>
                    </li>
                </ul>
            </ColumnList>

            <ColumnList>
                <ul>
                    <li>
                        <IconNtext>
                            <CSharp />
                            C# - C sharp
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <Java />
                            Java
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <Golang />
                            Golang
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <VB />
                            Visual Basic
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <Sql />
                            SQL
                        </IconNtext>
                    </li>
                    <li>
                        <IconNtext>
                            <Php />
                            PHP
                        </IconNtext>
                    </li>
                </ul>
            </ColumnList>
        </ContactContainer >
    )
}

export default Contact;