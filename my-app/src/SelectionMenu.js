import React from 'react';

function SelectionMenu (props) {
    return (
        <>
            <label id={"recepy-select-options"}>Selecteer op:</label>
            <select name="recepy-select-options" id="recepy-select-options">
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
                <option value="option4">option4</option>
            </select>
        </>

    )
}

export default SelectionMenu;