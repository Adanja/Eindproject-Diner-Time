import React, {useState, useRef} from 'react';
import "./homepage.css";
// import {BrowserRouter as Router} from "react-router-dom";
// import { Link } from 'react-router-dom';
import RecipeData from "../Data.json";

// Components
import Footer from "../Footer";
import Nav from "../Nav";
// import Searchbar from "../Searchbar";
import Searchbar from "../components/Searchbar";
import HighlightedRecepy from "../HighlightedRecepy";


// Images
import warmRoodFruit from "../img/ijs_nagerecht.jpg";
import vgCoquille from "../img/voorgerecht-coquille.jpg";
import profileAvatar from "../img/profile_avatar.svg";

import {BrowserRouter as Router} from "react-router-dom";
import HighlightedUser from "../components/HighlightedUser";
import SearchCategories from "../components/SearchCategories";

function Homepage () {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const searchHandler = (searchTerm) => {
        // console.log(searchTerm);
        setSearchTerm(searchTerm);
        // Voeg een lijst met recepten toe, of een API?
        // if (searchTerm !== "") {
        //   const newRecepylist = recepies.filter((recepy) => {
        //       return
        //   }
        // }
    };


    return (
        <div className={"grid"}>
            <Nav />
            <Searchbar
            term={searchTerm}
            searchKeyWord={searchHandler}
            data={RecipeData}
            />
            <HighlightedRecepy
                h1={"Coquelle"}
                id={<div id={"hl_recepy_1"}></div>}
                img={vgCoquille}
                tag1={"Voorgerecht"}
                tag2={"Bladerdeeg"}
                tag3={"Makkelijk"}
            />

            <HighlightedRecepy
                h1={"Warm rood fruit"}
                id={<div id={"hl_recepy_2"}></div>}
                img={warmRoodFruit}
                tag1={"Nagerecht"}
                tag2={"Makkelijk"}
                tag3={"Fruit"}
            />

            <SearchCategories />

            <HighlightedUser  />

            <Footer           />
        </div>
    )
}

export default Homepage;