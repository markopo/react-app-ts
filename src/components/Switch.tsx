import React, {useContext} from 'react';
import {IoMdMoon as Moon, IoMdSunny as Sun, IoMdBeer as Beer } from 'react-icons/io';
import {ThemeContext, ThemeMode} from "../ThemeContext";


function getSelectedStyles(dark: ThemeMode, selection: ThemeMode): string {
   return  dark === selection ? 'icon selected' : 'icon';
}

export default function Switch() {
    const { dark, toggle } = useContext(ThemeContext);

    return (
        <button className="Switch" onClick={() => toggle()}>
            <Sun className={getSelectedStyles(dark, ThemeMode.Light)} />
            <Moon className={getSelectedStyles(dark,  ThemeMode.Dark)} />
        </button>
    )
}