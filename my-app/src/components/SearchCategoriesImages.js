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
                <button className={"category-btn"}>Kip</button>
                <button className={"category-btn"}>Rund</button>
                <button className={"category-btn"}>Vis</button>
                <button className={"category-btn"}>Wild</button>
            </div>

            <div className={"sc-buttons-outline"}>
                <button className={"category-btn"}>Vegetarisch</button>
                <button className={"category-btn"}>Vegan</button>
                <button className={"category-btn"}>Gluten-vrij</button>
                <button className={"category-btn"}>Lactose-vrij</button>
            </div>
        </div>
    );
}

export default SearchCategoriesImages;