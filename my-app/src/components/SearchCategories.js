import React from 'react';

function SearchCategories(props) {
    return (
        <div className={"search-categories"}>
            <h1>Zoek op gangen</h1>
            <div className={"sc-buttons-outline"}>
                <button className={"btn_white"}>Voorgerecht</button>
                <button className={"btn_white"}>Voorgerecht</button>
                <button className={"btn_white"}>Voorgerecht</button>
            </div>
            <div className={"sc-buttons-outline"}>
                <button className={"btn_white"}>Voorgerecht</button>
                <button className={"btn_white"}>Voorgerecht</button>
                <button className={"btn_white"}>Voorgerecht</button>
                <button className={"btn_white"}>Voorgerecht</button>
            </div>

            <div className={"sc-buttons-outline"}>
                <button className={"btn_white"}>Voorgerecht</button>
                <button className={"btn_white"}>Voorgerecht</button>
                <button className={"btn_white"}>Voorgerecht</button>
            </div>
        </div>
    );
}

export default SearchCategories;