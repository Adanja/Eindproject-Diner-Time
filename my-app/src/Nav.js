import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import darkMode from './img/Icon feather-moon.svg';
import "./Nav.css";

function Nav () {
    return (
        <nav>
            <h4>Diner Time</h4>
            <ul>
                <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/recepten" exact activeClassName="active-link">Recepten</NavLink></li>
                <li>FAQ</li>
            </ul>
            <div className="nav-bottom">
                <div className="dark-mode">
                    <p><img src={darkMode} alt={"dark-mode"} />Dark mode</p>
                </div>

                <Link to={"/signup"} exact activeClassName="active-link">
                    <button className="btn-sign-up">
                    Sign up
                    </button>
                </Link>
                <Link to={"/login"} exact activeClassName="active-link">
                <button
                    className="btn-log-in"
                >
                    Log in
                </button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;