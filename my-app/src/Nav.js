import React from 'react';

function Nav (props) {
    return (
        <nav>
            <h4>Diner Time</h4>
            <ul>
                <li>Home</li>
                <li>Recepten</li>
                <li>Blog</li>
                <li>Sign up</li>
                <li>Log in</li>
            </ul>
            <div className="nav-bottom">
                <div className="dark-mode">
                    <p><image src="" alt="dark-mode"> </image> Dark mode </p>
                </div>

                <button className="btn-sign-up">
                    Sign up
                </button>
                <button className="btn-log-in">
                    Log in
                </button>
            </div>
        </nav>
    )
}

export default Nav;