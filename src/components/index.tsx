import { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Menu from "./general/menu";
import Header from "./header";
import LandingPage from "./landingpage";
import Ecommerce from "./ecommerce";
import Footer from "./footer";
import Profile from "./profile";
import Proyects from "./proyects";
import i18next from "i18next";

const Components: FC = () => {
    const location = useLocation()

    useEffect(() => { // default lang is spanish if link has "/en", change to english
        const language = location.pathname === "/en" ? "en" : "es"
        i18next.changeLanguage(language)
        localStorage.setItem("lang", language)
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps

    return <>
        <Menu />
        <Header />
        <Container  >
            <Routes>
                <Route path="/*" element={<LandingPage />} />
                <Route path="proyects/*"  >
                    <Route index element={<Proyects />} />
                    <Route path="ecommerce/*" element={<Ecommerce />} />
                    <Route path="profile/*" element={<Profile />} />
                </Route>
            </Routes>
        </Container>
        <Footer />
    </>
}



const Container = styled.div`
    width: 100%;
    position: relative; 
    min-height: calc(100vh - 140px);
    z-index: 1;
`

export default Components;