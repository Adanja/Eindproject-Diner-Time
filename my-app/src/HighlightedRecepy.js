import React from 'react';

import voorgerechtCoquielle from './img/voorgerecht-coquille.jpg';
import pinterest from './img/pinterest.svg';
import favouriteHeart from "./img/empty-heart.svg";
import fullStarRating from './img/Icon ionic-ios-star.svg';
import halfStarRating from './img/Icon ionic-ios-star-half.svg';
import emptyRating from './img/Icon ionic-ios-star-outline.svg';
function HighlightedRecepy (props) {
    return (
        <>
            <div className="highlighted_recepy">
                <h1>Coquelle</h1>
                <img className="highlighted_recepy_img" src={voorgerechtCoquielle} alt="coquelle"></img>
                    <div className="social-media-handles">
                        <img src={pinterest} alt="pinterest"></img>
                        <img src={favouriteHeart} alt="favourite"></img>
                    </div>
                    <div className="recepy-rating">
                        <div id="rated_stars"> Aantal sterren:
                            <img src={fullStarRating} alt="rating"></img>
                            <img src={fullStarRating} alt="rating"></img>
                            <img src={fullStarRating} alt="rating"></img>
                            <img src={halfStarRating} alt="rating"></img>
                            <img src={emptyRating} alt="rating"></img>
                        </div>
                    </div>

                    <div className="recepy-tags">
                        <tag>Voorgerecht</tag>
                        <tag>Bladerdeeg</tag>
                        <tag>Makkelijk</tag>
                    </div>
                    <button className="btn_green">Recept maken</button>
            </div>
        </>

    )
}

export default HighlightedRecepy;