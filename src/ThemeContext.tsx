
import React, { useState, useLayoutEffect } from 'react';


export enum ThemeMode {
    Dark,
    Light
}

export const defaultThemeMode: ThemeMode = ThemeMode.Light;

export interface IThemeContext {
    dark: ThemeMode,
    toggle: () => void
}

export let defaultIThemeContext: IThemeContext = {
    dark: defaultThemeMode,
    toggle: () => {},
};

export const ThemeContext = React.createContext<IThemeContext>(defaultIThemeContext);

export function getSavedTheme(): ThemeMode {
   const mode: any =  window.localStorage.getItem('darkTheme');

   if (mode !== null) {
       try {
           // @ts-ignore
           const tMode: ThemeMode | undefined = (ThemeMode)[mode];

           if (tMode !== undefined){
                 return tMode as ThemeMode;
           } else {
               return defaultThemeMode
           }

       } catch (e) {
           console.log('error', e.message);
           return defaultThemeMode;
       }
   }

   return defaultThemeMode;
}

export function ThemeProvider (props: any) {
    const [dark, setDark] = useState<ThemeMode>(getSavedTheme());

    useLayoutEffect(() => {
        const lastTheme: ThemeMode = getSavedTheme();

        if (lastTheme === ThemeMode.Dark) {
            setDark(ThemeMode.Dark);
            applyTheme(darkTheme);
        }
        else if (lastTheme === ThemeMode.Light) {
            setDark(ThemeMode.Light);
            applyTheme(lightTheme);
        }

    }, [dark]);

    const applyTheme = (theme: any) => {
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const toggle = () => {
        const toggleMode = dark === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
        setDark(toggleMode);
        window.localStorage.setItem('darkTheme', ThemeMode[toggleMode]);
    };

    return <ThemeContext.Provider value={{
            dark,
            toggle,
        }}>
        {props.children}
        </ThemeContext.Provider>;
}

// styles
const lightTheme = [
    '--border: rgba(0,0,0,.2)',
    '--shadow: #000',
    '--heading: rgba(255,100,0,1)',
    '--main: #c8b411',
    '--text: #262525',
    '--textAlt: #262525',
    '--color: #262525',
    '--inactive: rgba(0,0,0,.3)',
    '--background: #fff',
    '--overlay: rgba(200, 180, 17, 0.3)'
];

const darkTheme = [
    '--border: rgba(255,255,255,.1)',
    '--shadow: #000',
    '--heading: rgba(255,255,5,.9)',
    '--main: #40034f',
    '--text: rgb(255, 255, 255)',
    '--textAlt: #fff',
    '--color: #fff',
    '--inactive: rgba(255,255,255,.3)',
    '--background: #2D2D2D',
    '--overlay: rgba(64, 3, 79, 0.3)'
];

