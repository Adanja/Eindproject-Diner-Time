// slightly modified from branch uitwerling-9, repository https://github.com/hogeschoolnovi/frontend-react-user-registration.git
import React, {useContext, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContextProvider';
import "./SignIn.css";

function SignIn() {
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const {login,logout, user,status} =  useContext(AuthContext);
    const history = useHistory();
    const { handleSubmit, register } = useForm();
    async function onSubmit(data) {
        // omdat onSubmit meerdere keren kan worden aangeroepen, beginnen we altijd met een "schone" lei (geen errors)
        setError('');
        toggleLoading(true);
        console.log( "line 31 JSON.stringify(data) JSON.stringify(data)",JSON.stringify(data));
        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                //email: data.email,
                password: data.password,
                //country: 'Nederland',
                username: data.username,
                //role:["user"]//["user","mod","admin"]
            });
            console.log("line 43 JSON.stringify(data) result",result);
            console.log("line 44 result.data.jwt",result.data.jwt);
            toggleRegisterSuccess(true);
            login(result.data.jwt);
            setTimeout(() => {
                history.push('/');
            }, 2000);
        } catch(e) {
            console.error(e);
            // op het error (e) object zit altijd een message property, maar die kan wat abstract zijn. Daarom extra text:
            setError(`Signin unsuccesfull, try again  (${e.message})`);
            // still to do: make the eroor more explicit based on response
        }
        toggleLoading(false);
    }
    return (
        <>
            <h1>Inloggen</h1>
            <form onSubmit={handleSubmit(onSubmit)}>{/*we use here handleSubmit(onSubmit) which is a react-hook-form method*/}
            <div className={"formbox"}>
                <label htmlFor="username-field">
                   Gebruikersnaam
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        {...register("username")}
                    /*    En gewoon input placeholder={"Name"} />?  */
                    />
                </label>
                <label htmlFor="password-field">
                    Password:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        {...register("password")}
                    />
                </label>
            </div>
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Sign in'}
                </button>
                {registerSuccess === true &&  <p>Registration succesfull! You will get redirected to the home page!</p>}
                {error && <p className="error-message">{error}</p>}
            </form>
            {/*<p>Already registered? Just sign in <Link to="/signin">hier</Link>.</p>*/}
        </>
    );
}
export default SignIn;