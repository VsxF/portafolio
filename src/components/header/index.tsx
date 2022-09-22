import i18next from "i18next";
import { FC, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleTheme } from "../../redux/themeSlice";
import {  SpainFlag, UsaFlag } from "../general/icons/icons";
import Select from "../general/select";
import { CheckBox, Container, Item, Slide, Switch } from "./style";

const Header:FC = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)
    const dispatch = useDispatch();
    const [lang, setLang] = useState(i18next.language);

    const toggleLanguage = (language: string) => {
        setLang(language)
        i18next.changeLanguage(language)
        localStorage.setItem("lang", language)
    }

    return (
        <Container>
            <Item>
                <Select title={ lang === 'es' ?
                                <SpainFlag /> :
                                <UsaFlag />
                }>
                    <option onClick={ () => toggleLanguage('en') }>
                        English
                    </option>
                    <option onClick={ () => toggleLanguage('es') }>
                        Español
                    </option>
            </Select>

            </Item>

            <Item>
                <Switch>
                    <CheckBox 
                        id="checkbox" 
                        type="checkbox" 
                        checked={theme.name !== 'Dark'}
                        onChange={ () => dispatch(toggleTheme()) }
                    />
                    <Slide htmlFor="checkbox" />
                </Switch>
            </Item>
        </Container>
    )
}

export default Header;