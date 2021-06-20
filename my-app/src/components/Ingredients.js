import React, {useState} from 'react';

function Ingredients(props) {
    const [Checkbox, toggleCheckboxes] = useState("Jahallo");
    return (
        <div className={"ingrediënten"}>
            <h1>Ik kook voor: </h1>
            <input type="text"/>
            <ul>
                <li><Checkbox label={"150 frambozen"} />150 gram frambozen</li>
                <li>150 gram aardbeien</li>
                <li>100 gram blauwe bessen</li>
                <li>150 gram bramen</li>
                <li>1/2 tl gemalen kruidnagel</li>
                <li>1/2 tl knaeel</li>
                <li>walnotenijs</li>
                <li>verse munt</li>
                <li>50 gram amandelen</li>
                <p>Missende ingrediënten kopiëren</p>
            </ul>

            <ul>Benodigdheden
                <li>Kookpan</li>
                <li>IJslepel</li>
                <li>Schilmes</li>
            </ul>
        </div>
    );
}

export default Ingredients;