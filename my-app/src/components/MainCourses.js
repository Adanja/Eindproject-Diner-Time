import React from 'react';
import "../pages/receptenPaginaAlgemeen.css";
import arrowDown from "../img/ArrowSmallDown.svg";
// import voorgerechtGroot from "../img/voorgerecht_groot.jpg";

function MainCourses(props) {
    return (
        <>
            <div className={"cta-maincourses"}>
                <h3>Voorgerecht</h3>
                <div className={"cta-voorgerecht"}>

                    <button>Bekijken</button>
                </div>

                <div className={"cta-hoofdgerecht"}>
                    <h3>Hoofdgerecht</h3>
                    <button>Bekijken</button>
                </div>

                <div className={"cta-nagerecht"}>
                    <h3>Nagerecht</h3>
                    <button>Bekijken</button>
                </div>
                <button>Show more<img src={arrowDown} className={"show-more-arrow"}/> </button>
            </div>

        </>
    );
}

export default MainCourses;