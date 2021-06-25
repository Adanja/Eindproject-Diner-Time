import React, {useState} from 'react';
import "./receptenPagina.css";
import Searchbar from "../Searchbar";
import Ingredients from "../components/Ingredients";
import PreperationMethod from "../components/PreperationMethod";

import warmRoodFruit from "../img/ijs_nagerecht.jpg";
import Nav from "../Nav";
import HighlightedRecepy from "../HighlightedRecepy";
import HighlightedUser from "../components/HighlightedUser";
import Footer from "../Footer";
import SearchCategories from "../components/SearchCategories";
import Reviews from "../components/Reviews";

function ReceptenPagina() {

    return (
        <>
            <div className={"grid-recepy-page"}>
                <Nav
                    />
                <Searchbar
                    />
                <div className={"chosen-recepy"}>
                    <h1>Warm rood fruit</h1>
                    <img className={"img-chosen-recepy"}    src={warmRoodFruit} alt="Nagerecht Warm rood fruit"/>
                    <p>Bereidingstijd: 20 minuten Moeilijkheidsgraad: makkelijk Vegetarisch</p>
                    <tag>nagerecht</tag>
                    <tag>fruit</tag>
                </div>

                <Ingredients
                    />

                <PreperationMethod
                    />
                <Reviews />

                <SearchCategories />
                <HighlightedUser />
                <Footer />

            </div>
        </>
    )
}

export default ReceptenPagina;