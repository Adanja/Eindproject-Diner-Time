import React, {useState} from 'react';
import "./ingredients.css";
import Checkbox from "./Checkbox";

function Ingredients(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const [recepyValue, setRecepyValue] = useState("default");
    const [person, setPerson] = useState("4 personen");

    //Functie voor ingredïenten hoeveelheden
    // function recepyValue () {
    //     if (setPerson == 4) {
    //         setRecepyValue = person * recepyValue;
    //     }
    // }


    return (
        <>
        <div className={"ingrediënten"}>
            <h1>Ingrediënten</h1>
            <h3>Ik kook voor: </h3>
            <input type="number" placeholder={person}/>

            <ul className={"ingredient-list"}>
                <li>
                    <input type="checkbox"
                           value={"frambozen"}
                           checked={isChecked}
                           onChange={handleOnChange} />
                           {150 * 1} gram frambozen
                </li>
                <li>
                    <input type={"checkbox"}/>
                    {150 * 1} gram aardbeien</li>
                <li>
                    <input type={"checkbox"}/>
                    {100 * 1} gram blauwe bessen</li>
                <li>
                    <input type={"checkbox"}/>
                    150 gram bramen</li>
                <li>
                    <input type={"checkbox"}/>
                    1/2 tl gemalen kruidnagel</li>
                <li>
                    <input type={"checkbox"}/>
                    1/2 tl knaeel</li>
                <li>
                    <input type={"checkbox"}/>
                    walnotenijs</li>
                <li>
                    <input type={"checkbox"}/>
                    verse munt</li>
                <li><input type={"checkbox"}/>
                    50 gram amandelen</li>
                <p>Missende ingrediënten kopiëren</p>
            </ul>



            <h4>Benodigdheden</h4>
                <p>Kookpan</p>
                <p>IJslepel</p>
                <p>Schilmes</p>
        </div>
    </>
    );
}

export default Ingredients;