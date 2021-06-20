import React from 'react';
import SelectionMenu from "../SelectionMenu";
import Searchbar from "../Searchbar";
import HighlightedRecepy from "../HighlightedRecepy";
// import {BrowserRouter as Router} from "react-router-dom";
// import { Link } from 'react-router-dom';
import profileAvatar from "../img/profile_avatar.svg";
import Footer from "../Footer";

import warmRoodFruit from "../img/ijs_nagerecht.jpg";
import vgCoquille from "../img/voorgerecht-coquille.jpg";

function Homepage () {
    return (
        <>
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

        <div id="highlighted-user">
                <div id="hl-user-text">
                    <h3>Soepen maken vind ik het allerleukste om te doen</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto cum deserunt dolor eos explicabo itaque libero magni minus, modi necessitatibus officia porro, quas rem sed similique sit ut vero!</span><span>At earum explicabo facere incidunt porro. Accusantium adipisci animi eaque incidunt ipsa necessitatibus nulla obcaecati odit provident quae quam quod, quos sunt, voluptate voluptates. Itaque nulla praesentium quasi repellendus suscipit?</span>
                    </p>
                </div>

                <div id="hl-user-profile">
                    <img src={profileAvatar} alt={"profile picture"}></img>
                    <h5>Gebruikersnaam</h5>
                </div>

                <div id="hl-user-buttons">
                    <button className="btn_green">Bekijk profiel</button>
                    <button className="btn_white">Bekijk recept</button>
                </div>
        </div>

        <Footer
        />
        </>
    )
}

export default Homepage;