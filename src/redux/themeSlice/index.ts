import { createSlice } from "@reduxjs/toolkit";
import ThemeInfo from '../../Themes/theme';
import { ITheme } from "styled-components";

export interface ThemeState { theme: ITheme }

const themeName: string = localStorage.getItem("theme") as string;

const initialState: ThemeState = {
    theme: themeName === 'Dark' ?
        getTheme('dark') :
        getTheme('light')
}

function getTheme(theme: string): ITheme {
    return theme === 'dark' ?
        ThemeInfo.dark :
        ThemeInfo.light
}

function toggleThemeFunc(actual: ITheme): ITheme {
    const auxTheme = actual.id === getTheme('dark').id ?
                                    getTheme('light') :
                                    getTheme('dark');
    localStorage.setItem("theme", auxTheme.name)
    return auxTheme;
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        ligth: (state) => { state.theme = getTheme('light') },
        dark: (state) => { state.theme = getTheme('dark') },
        toggleTheme: (state) => {
            state.theme = toggleThemeFunc(state.theme)
        }
    }
})

export const { ligth, dark, toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;