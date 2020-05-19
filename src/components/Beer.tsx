import React, {useContext} from 'react';
import { IoMdBeer } from 'react-icons/io';
import {ThemeContext } from "../ThemeContext";

function getSelectedStyles(hasBeer: boolean): string {
    return hasBeer ? 'icon selected' : 'icon';
}

export default function Beer() {
    const { hasBeer, toggleBeer } = useContext(ThemeContext);
    console.log('beer: ', hasBeer);

    return (
        <button className="beer" onClick={() => toggleBeer() } >
            <IoMdBeer className={getSelectedStyles(hasBeer)} />
        </button>
    )
}
