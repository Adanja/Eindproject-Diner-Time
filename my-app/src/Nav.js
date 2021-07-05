import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import darkMode from './img/Icon feather-moon.svg';
import "./Nav.css";
import PopUp from "./components/PopUp";

function Nav () {
    const [popUp, togglePopUp] = useState(false);

    const [showWindow, setShowWindow] = useState("Sign Up");

    return (
        <nav>
            <h4>Diner Time</h4>
            <ul>
                <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/receptenAlgemeen" exact activeClassName="active-link">Recepten</NavLink></li>
                <li><NavLink to={"/profile"} exact activeClassname={"active-link"}>Profiel</NavLink></li>
            </ul>
            <div className="nav-bottom">
                <div className="dark-mode">
                    <p><img src={darkMode} alt={"dark-mode"} />Dark mode</p>
                </div>

                <button onClick={()=> {if (popUp === false) {togglePopUp(!popUp)} setShowWindow ("Sign up")}} className="btn-sign-up">
                    Sign up
                </button>

                <button onClick={()=> {if (popUp === false) {togglePopUp(!popUp)} setShowWindow ("Log in")}}
                        className="btn-log-in"
                >
                    Log in
                </button>

            </div>
            {popUp === true ? <PopUp showWindow={showWindow} closePopUp={signUp => togglePopUp(signUp)} /> : ""}
        </nav>
    )
}

export default Nav;