import React from 'react';
import "./uploadpaginaRecepten.css";

function UploadpaginaRecepten(props) {
    return (
        <div>
            <h1>Recept upload pagina</h1>
            <form action="">
                <div className={"left-form"}>
                    <h5>Recept titel</h5>
                    <input/>

                    <h5>Beschrijving</h5>
                    <textarea className={"form-beschrijving"} placeholder={"Typ hier je beschrijving.."}>
                    </textarea>

                    <h5>Ingrediëntenlijst</h5>
                    <select name="" id="">
                        <option value="4 personen">4 personen</option>
                        <option value="2">2 personen</option>
                        <option value="5">5 personen</option>
                        <option value="6">6 personen</option>
                    </select>

                    <h5>Benodigdheden</h5>
                    <input type="text" placeholder={"Benondigdheid"}/>
                    <input type="text" placeholder={"Benondigdheid"}/>
                    <input type="text" placeholder={"Benondigdheid"}/>

                    <h5>Tags</h5>
                    <input type="text" data-role="taginput" />
                </div>

                <div className={"right-form"}>
                    <input type={"file"} className={"file-upload"}/>

                    <h5>Bereidingstijd</h5>
                    <select>
                        <option value="20">20 minuten</option>
                        <option value="30">30 minuten</option>
                        <option selected value="40">40 minuten</option>
                        <option value="50">50 minuten</option>
                        <option value="60">60 minuten</option>
                    </select>

                    <h5>Moeilijkheidsgraad</h5>
                    <select>
                        <option value="EASY">Makkelijk</option>
                        <option value="INTERMEDIATE">Gemiddeld</option>
                        <option selected value="HARD">Moeilijk</option>
                    </select>

                    <button>Concept opslaan</button>
                    <button>Recept uploaden</button>
                </div>
            </form>
        </div>
    );
}

export default UploadpaginaRecepten;