import React from 'react';
import "../pages/receptenPaginaAlgemeen.css";
import arrowDown from "../img/ArrowSmallDown.svg";
// import voorgerechtGroot from "../img/voorgerecht_groot.jpg";

function MainCourses(props) {
    return (
        <>
            <div className={"cta-maincourses"}>

                <div className={"cta-voorgerecht"}>
                    <h3>Voorgerecht</h3>
                    <button>Bekijken <img src={arrowDown} className={"show-more-arrow"} alt={"Arrow down"}/></button>
                </div>

                <div className={"cta-hoofdgerecht"}>
                    <h3>Hoofdgerecht</h3>
                    <button>Bekijken <img src={arrowDown} className={"show-more-arrow"} alt={"Arrow down"}/></button>
                </div>

                <div className={"cta-nagerecht"}>
                    <h3>Nagerecht</h3>
                    <button>Bekijken <img src={arrowDown} className={"show-more-arrow"} alt={"Arrow down"}/></button>
                </div>
                <button className={"btn_white"}>Show more<img src={arrowDown} className={"show-more-arrow"} alt={"Arrow down"}/> </button>
            </div>

        </>
    );
}

export default MainCourses;