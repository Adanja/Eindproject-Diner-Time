import React from 'react';
import ontbijt from "../img/ijs_nagerecht.jpg";

function SearchCategoriesImages(props) {
    return (
        <div className={"search-categories-images"}>
            <div className={"sc-buttons-outline"}>
                <button className={"category-btn"} id={"cg-ontbijt"}> <p>Ontbijt</p></button>
                <button className={"category-btn"} id={"cg-voorgerecht"}><p>Voorgerecht</p></button>
                <button className={"category-btn"} id={"cg-tussengerecht"}><p>Tussengerecht</p></button>
                <button className={"category-btn"} id={"cg-hoofdgerecht"}><p>Hoofdgerecht</p></button>
                <button className={"category-btn"} id={"cg-nagerecht"}><p>Nagerecht</p></button>
            </div>
            <div className={"sc-buttons-outline"}>
                <button className={"category-btn"} id={"cg-kip"}><p>Kip</p></button>
                <button className={"category-btn"} id={"cg-rund"}><p>Rund</p></button>
                <button className={"category-btn"} id={"cg-vis"}><p>Vis</p></button>
                <button className={"category-btn"} id={"cg-wild"}><p>Wild</p></button>
            </div>

            <div className={"sc-buttons-outline"}>
                <button className={"category-btn"} id={"cg-vega"}><p>Vegetarisch</p></button>
                <button className={"category-btn"} id={"cg-vegan"}><p>Vegan</p></button>
                <button className={"category-btn"} id={"cg-gluten"}><p>Gluten-vrij</p></button>
                <button className={"category-btn"} id={"cg-lactose"}><p>Lactose-vrij</p></button>
            </div>
        </div>
    );
}

export default SearchCategoriesImages;