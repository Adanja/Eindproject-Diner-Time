import React, {useState} from 'react';
import "./PopUp.css";

export default function PopUp ({closePopUp, showWindow}){
    const [userPopup, setUserPopUp] = useState("Log in");
    console.log(userPopup, showWindow);
        return (
            <div className="modal">
                <div className="modal_content">
                <button className="close-btn" onClick={() => {closePopUp(false)}}>
                &times;
                </button>
                    <div><button className={"popup-user-btn"} onClick={!showWindow}><h3>Log In</h3></button></div>
                    <div><button className={"popup-user-btn"} onClick={showWindow}><h3>Sign Up</h3></button></div>
                    <form>
                        {userPopup === showWindow ?
                        <div className={"container-inloggen"}>
                            <h3>Inloggen</h3>
                            <div className={"label-container"}>
                                <label>
                                    Gebruikersnaam
                                    <input type="text" name="name" required={true}/>
                                </label>
                                <label>
                                    Email
                                    <input type="text" name="email" required={true}/>
                                </label>
                                <label>
                                    Wachtwoord
                                    <input type="password" name="password" required={true}/>
                                </label>
                            </div>
                            <input className={"form-button"} type="submit" value={"Inloggen"}/>
                        </div>
                            :
                        <div className={"container-registreren"}>
                            <h3>Registreren</h3>
                            <div className={"label-container"}>
                                <label>
                                    Gebruikersnaam
                                    <input type="text" name="name" required={true}/>
                                </label>

                                <label>
                                    Email
                                    <input type="text" name="email" required={true}/>
                                </label>

                                <label>
                                    Wachtwoord
                                    <input type="password" name="password" required={true}/>
                                </label>
                            </div>
                            <input className={"register-form-btn"}  type="submit" value={"Registreren"}/>
                        </div>
                        }
                    </form>
                </div>
            </div>
        );
}
