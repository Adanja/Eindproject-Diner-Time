import React from 'react';
import IconTimeResult from "../img/Icon feather-moon.svg"

function Reviews(props) {
    return (
        <div className={"reviews"}>
            <h1>Reviews</h1>
            <p>Aantal sterren</p>
            
            <div className={"review-sort-option"}>
            <p>Sorteren op:</p>
                <p>Meest behulpzaam</p>
            </div>
            
            <div className={"review-rating"}>
                <div className={"review-rating-block"}>
                    <img src={IconTimeResult} alt="Tijd resultaat"/>
                    <h3>Tijd/resultaat</h3>
                    <p>Rating</p>
                </div>
                <div className={"review-rating-block"}>
                    <img src={IconTimeResult} alt="Tijd resultaat"/>
                    <h3>Smaak</h3>
                    <p>Rating</p>
                </div>
                <div className={"review-rating-block"}>
                    <img src={IconTimeResult} alt="Tijd resultaat"/>
                    <h3>Aanbevolen</h3>
                    <p>Rating</p>
                </div>

            </div>
        </div>
    );
}

export default Reviews;