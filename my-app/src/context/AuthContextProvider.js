import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [ authState, setAuthState ] = useState({
        user: null,
        status: 'pending',
    })
    const history = useHistory();
    function isTokenValid(jwtToken) {
        const decodedToken = jwt_decode(jwtToken);
        const expirationUnix = decodedToken.exp; // let op: dit is een UNIX timestamp
        const now = new Date().getTime(); // dit is een javascript timestamp
        const currentUnix = Math.round(now / 1000); // nu is het ook een UNIX timestamp
        // Als er nog seconden over zijn wanneer we "nu" aftrekken van de expiratiedatum is hij nog geldig
        const isTokenStillValid = expirationUnix - currentUnix > 0;
        return isTokenStillValid;
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!authState.user && token && isTokenValid(token)) {
            const decodedToken = jwt_decode(token);
            fetchUserData(token, decodedToken.sub);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(jwtToken) {
        console.log("line 84 AuthContext.js jwtToken",jwtToken)
        localStorage.setItem('token', jwtToken);
        const decodedToken = jwt_decode(jwtToken);
        console.log("line 84 AuthContext.js decodedToken",decodedToken);
        const userId = decodedToken.sub;
        fetchUserData(jwtToken, userId);
    }


    async function fetchUserData(token, id) {
        try {
            const result = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log("line 101 from AuthContext: result=",result);
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    role: result.data.role,
                },
                status: 'done',
            });
            //history.push('/profile'); // this is how Nova did it
            history.push('/');
            console.log("line 115 of AuthContext.js: modify line 1bove to redirect to another page than profile after login in")
        } catch(e) {
            console.error(e);
        }
    }
    function logout() {history.push('/');
        setAuthState({user: null});
        console.log('in AuthContext.js line 123: setAuthState({user: null}), so user is logged out');
    }
    // We hebben de gebruikersdata nodig, functies voor in- en uitloggen, de status van data-ophalen en, mocht het fout gaan, errors!
    // Omdat authState onderdeel willen maken van het data object (en geen object in een object) gebruiken we de spread-operator (...)
    const data = {
        ...authState,
        login: login,
        logout: logout,
    };
    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'pending'
                ? <p>Loading...</p>
                : children
            }
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;