import React, {useState} from 'react';
import "./receptenPagina.css";
import Searchbar from "../Searchbar";
import Ingredients from "../components/Ingredients";
import PreperationMethod from "../components/PreperationMethod";

import warmRoodFruit from "../img/ijs_nagerecht.jpg";

function ReceptenPagina() {

    return (
        <>
            <Searchbar
                />
            <div className={"chosen-recepy"}>
                <h1>Warm rood fruit</h1>
                <img src={warmRoodFruit} alt="Nagerecht Warm rood fruit"/>
            </div>

            <Ingredients
                />

            <PreperationMethod
                />

        </>
    )
}

export default ReceptenPagina;