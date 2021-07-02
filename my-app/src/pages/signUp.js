import React, {useState} from 'react';
import PopUp from "../components/PopUp";
import Nav from "../Nav";
import Footer from "../Footer";

function SignUpPagina(props) {
    const [togglePop, setTogglePop] = useState (false);
    const [state, setState] = useState (false);
    useState (() => {
        setState({seen: !state.seen
        })
        // setTogglePop == true;
    })
    return (
        <div className={"grid-signUp"}>
            <Nav />
            <div className={"register-form"}>
            <h1>Registreren</h1>
            <div onClick={togglePop}>
                <button >Inloggen</button>
            </div>
            {state.seen ? <PopUp toggle={togglePop} /> : null}
            </div>
            <Footer />
        </div>
    );
}

export default SignUpPagina;