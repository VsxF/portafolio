import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Menu from "./general/menu";
import Header from "./header";
import LandingPage from "./landingpage";
import Ecommerce from "./ecommerce";
import Footer from "./footer";
import Profile from "./profile";
import Proyects from "./proyects";
import Contact from "./contact";

const Components: FC = () => {

    return (
        <>
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
    )
}

const Container = styled.div`
    width: 100%;
    position: relative; 
    min-height: calc(100vh - 140px);
`

export default Components;