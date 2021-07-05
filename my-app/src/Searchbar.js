import React, {useState, useRef} from 'react';

function Searchbar ( {term, searchKeyWord, }) {
    console.log(term, searchKeyWord);
    const inputEl = useRef("");
    const getSearchTerm = () => {
        // console.log(inputEl.current.value);
        searchKeyWord(inputEl.current.value);
    };
    return (

        <>
            <div id="searchbar">
                <input ref={inputEl}
                       type="text"
                       className="select-recepy"
                       placeholder="Vul hier je zoekterm in.."
                       value={term}
                       onChange={getSearchTerm}
                    />

                    <select name="recepy-courses" className="select-recepy">
                        <option value="" disabled selected>Selecteer type gang</option>
                        <option value="option1" >Voorgerecht</option>
                        <option value="option2">Hoofdgerecht</option>
                        <option value="option3">Nagerecht</option>
                        <option value="option4">Ontbijt</option>
                    </select>

                    <select name="recepy-ingredients" className="select-recepy">
                        <option value="" disabled selected>Selecteer ingredïent opties</option>
                        <option value="option1">Vlees</option>
                        <option value="option2">Vis</option>
                        <option value="option3">Groenten</option>
                        <option value="option4">Fruit</option>
                    </select>
                    <button className="btn_green">ZOEKEN</button>
            </div>
        </>

    )
}

export default Searchbar;