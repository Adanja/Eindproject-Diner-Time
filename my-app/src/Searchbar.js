import React from 'react';

function Searchbar (props) {
    return (
        <>
            <div id="searchbar">
                <input type="text" className="select-recepy " placeholder="Vul hier je zoekterm in.."></input>

                    <select name="recepy-courses" className="select-recepy">
                        <option value="option1">Gangoptie 1</option>
                        <option value="option2">Gangoptie 2</option>
                        <option value="option3">Gangoptie 3</option>
                        <option value="option4">Gangoptie 4</option>
                    </select>

                    <select name="recepy-ingredients" className="select-recepy">
                        <option value="option1">Ingrediëntoptie 1</option>
                        <option value="option2">Ingrediëntoptie 2</option>
                        <option value="option3">Ingrediëntoptie 3</option>
                        <option value="option4">Ingrediëntoptie 4</option>
                    </select>
                    <button className="btn_green">ZOEKEN</button>
            </div>
        </>

    )
}

export default Searchbar;