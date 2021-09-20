import React, {useState} from 'react';
import "./PopUp.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

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

                        {userPopup === showWindow ?
                        <div className={"container-inloggen"}>
                            <SignIn />
                        </div>
                            :
                        <div className={"container-registreren"}>
                            <SignUp />
                        </div>
                        }
                </div>
            </div>
        );
}
