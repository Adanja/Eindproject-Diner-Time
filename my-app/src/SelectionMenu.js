import React from 'react';
import "./selectionMenu.css";

function SelectionMenu (props) {
    return (
        <div className={"select-menu"}>
            <label id={"recepy-select-options"}>Selecteer op:</label>
            <select name="recepy-select-options" id="recepy-select-options">
                <option value="option1">Best beoordeeld</option>
                <option value="option2">Nieuwst geplaatst</option>
                <option value="option3">Oudst geplaatst</option>
                <option value="option4">Laagst beoordeeld</option>
            </select>
        </div>

    )
}

export default SelectionMenu;