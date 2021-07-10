import React from 'react';

import voorgerechtCoquielle from '../img/voorgerecht-coquille.jpg';
import pinterest from '../img/pinterest.svg';
import favouriteHeart from "../img/empty-heart.svg";
import fullStarRating from '../img/Icon ionic-ios-star.svg';
import halfStarRating from '../img/Icon ionic-ios-star-half.svg';
import emptyRating from '../img/Icon ionic-ios-star-outline.svg';

function SimpleHighlightedRecepy ( {h1, id, title, tag1, tag2, tag3, img} ) {
    return (
        <div className={"simple-highlighted-recepy"}>
            <div className="highlighted-recepy">
                <div className={id}>
                    <h1>{h1}</h1>
                    <img className="highlighted_recepy_img" src={img} alt="gerecht_foto" />
                        <div className="social-media-handles">

                            <img src={pinterest} alt="pinterest" />
                            <img src={favouriteHeart} alt="favourite" />
                        </div>
                        <div className={"hl-recepy-infobox"}>
                            <h3>{title}</h3>
                            <div className="simple-recepy-rating">
                                <div id="rated_stars">
                                    <img src={fullStarRating} alt="rating" />
                                    <img src={fullStarRating} alt="rating" />
                                    <img src={fullStarRating} alt="rating"/>
                                    <img src={halfStarRating} alt="rating"/>
                                    <img src={emptyRating} alt="rating"/>
                                </div>

                            </div>
                        </div>
                    <div className={"hl-recepy-btn"}>
                        <button className="btn_green">Recept maken</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SimpleHighlightedRecepy;