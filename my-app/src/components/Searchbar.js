import React, {useState} from 'react';
import './Searchbar.css';
import ReceptenPagina from "../pages/receptenPagina";

function Searchbar ({placeholder, data, inputEl, getSearchTerm, term}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");

    }
    return (
        <form
         onSubmit={handleFilter}
        >
            <div className={"select-menu"}>
                <label id={"recepy-select-options"}>Selecteer op:</label>
                <select name="recepy-select-options" id="recepy-select-options">
                    <option value="option1">Best beoordeeld</option>
                    <option value="option2">Nieuwst geplaatst</option>
                    <option value="option3">Oudst geplaatst</option>
                    <option value="option4">Laagst beoordeeld</option>
                </select>
            </div>

            <div className="search">
                <div className={"searchInputs"}>
                    <input  ref={inputEl}
                            type="text" className="select-recepy"
                            placeholder="zoekterm"
                            onChange={handleFilter}
                            value={wordEntered}
                            //*Moet ik deze bewaren of niet? Wat doet het??*/}
                            // value={term}
                            // onChange={getSearchTerm}
                    />

                </div>
                {filteredData.length != 0 && (
                        <div className={"dataResult"}>
                            {filteredData.slice(0, 5).map((value, key) => {
                                return (
                                    <a className={"dataItem"}
                                       href={value.link}
                                       target={"_blank"}>
                                        <p>{value.title}</p>
                                    </a>
                                );
                            })}
                        </div>
                    )}

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

                    <button className="btn_green" type={"submit"}>ZOEKEN 🍳</button>
            </div>
        </form>

    )
}

export default Searchbar;