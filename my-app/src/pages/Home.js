import React from 'react';
import "./homepage.css";
// import {BrowserRouter as Router} from "react-router-dom";
// import { Link } from 'react-router-dom';


// Components
import Footer from "../Footer";
import Nav from "../Nav";
import SelectionMenu from "../SelectionMenu";
import Searchbar from "../Searchbar";
import HighlightedRecepy from "../HighlightedRecepy";


// Images
import warmRoodFruit from "../img/ijs_nagerecht.jpg";
import vgCoquille from "../img/voorgerecht-coquille.jpg";
import profileAvatar from "../img/profile_avatar.svg";

import {BrowserRouter as Router} from "react-router-dom";
import HighlightedUser from "../components/HighlightedUser";
import SearchCategories from "../components/SearchCategories";

function Homepage () {
    return (
        <div className={"grid"}>
            <Nav
            />
            <SelectionMenu
            />

            <Searchbar
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