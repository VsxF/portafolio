import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Components from "./components";
//redux
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
//lang
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "./translation/en/global.json";
import global_es from "./translation/es/global.json";
//theme
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Themes/global.d'

const lang: string = localStorage.getItem("lang") as string;

i18next.init({
  interpolation: { escapeValue: false },
  lng: lang ? lang : "es",
  resources: {
    en: { global: global_en },
    es: { global: global_es }
  }
})

const App:FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme )

  return ( 
      <I18nextProvider i18n={ i18next } >
        <ThemeProvider theme={ theme }>
        <GlobalStyle />
          <BrowserRouter>
            <Components />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
  )
}

export default App;
