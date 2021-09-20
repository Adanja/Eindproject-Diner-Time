// slightly modified from branch uitwerling-9, repository https://github.com/hogeschoolnovi/frontend-react-user-registration.git
import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function SignUp() {
    console.log("Sjaak patat!")
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);


    const history = useHistory();
    const { handleSubmit, register } = useForm();
    async function onSubmit(data) {
        // omdat onSubmit meerdere keren kan worden aangeroepen, beginnen we altijd met een "schone" lei (geen errors)
        setError('');
        toggleLoading(true);
        console.log( "line 31 data",data);

        try {
            const result = await axios.post('http://localhost:8080/users', {
                email: data.email,
                password: data.password,
                //country: 'Nederland',
                username: data.username,
                // role:["user"]//["user","mod","admin"]
            });
            console.log("line 43 result",result);
            toggleRegisterSuccess(true);
            // setTimeout(() => {
            //     history.push('/signin');
            // }, 2000);
        } catch(e) {
            console.error(e);
            // op het error (e) object zit altijd een message property, maar die kan wat abstract zijn. Daarom extra text:
            setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);
            // TIP: Wanneer er echt iets fout gaat, krijg je een 404 error. Wanneer de gebruikersnaam al bestond,
            // krijg je waarschijnlijk een 400 error.Zo kun je hier ook nog invloed uitoefenen op welke error message je laat zien op de gebruiker!
        }
        toggleLoading(false);
    }
    return (
        <>
            <h1>Sign Up</h1>
            <p>This is the registration page, in construction</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    Email:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                    />
                </label>
                <label htmlFor="username-field">
                    username:
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        {...register("username")}
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
                <button
                    type="submit"
                    // className="form-button"
                    // disabled={loading}
                >
                    {loading ? 'Sending...' : 'Create an account'}
                </button>
                {registerSuccess === true &&  <p>Registration succesfull! You will get redirected to the home page!</p>}
                {error && <p className="error-message">{error}</p>}
            </form>
            <p>Already registered? Just sign in <Link to="/signin">hier</Link>.</p>
        </>
    );
}
export default SignUp;