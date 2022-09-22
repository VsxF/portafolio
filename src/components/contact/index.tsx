import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { CSharp, Css, Cv, Golang, Html, Java, JavaScript, Mail, NodeJS, Php, Reactjs, Space, Sql, TypeScript, VB } from "../general/icons/icons";
import { ContactContainer, IconNtext, Column, ColumnList, SayContainer, Copied } from "./style";

const Contact: FC = () => {
    const [copied, setCopied] = useState(false)
    const ref = useRef<null | HTMLDivElement>(null);
    const [t] = useTranslation('global');
    const rootChildren: any = (document.getElementById('root') as HTMLElement).children
    const location = useLocation();

    useEffect(() => {
        if (location.state === "ctcmenu") 
            ref.current?.scrollIntoView()
        
        fixHeaderStyle();
        return defaultHeaderStyle; // unmount -> clean header changes
    }, [location.state]) // eslint-disable-line react-hooks/exhaustive-deps

    // fix heather issues
    const fixHeaderStyle = () => {
        rootChildren[2].style = "display: none"
        rootChildren[3].style = "min-height: calc(100vh - 45px)"
        rootChildren[3].children[0].style = "top: 0"
        rootChildren[3].children[1].style = "top: 0"
    }

    // return to normal header settings
    const defaultHeaderStyle = () => {
        rootChildren[2].style.removeProperty("display")
        rootChildren[3].style.removeProperty("min-height")
        rootChildren[3].children[0].style.removeProperty('top')
        rootChildren[3].children[1].style.removeProperty('top')
    }

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
                                to={require("../../assets/cvs/cves.pdf")}
                                target="_blank"
                                download="Herberth Bustamante WebDeveloper"
                            >
                                <Cv />
                                {t("contact.view")}
                            </Link>
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