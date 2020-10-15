import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import google from '../../../images/logos/google_log.png';
import logo from '../../../images/logos/logo.png'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <section className='login_container container'>
             <img className='logo' src={logo} alt=""/>
            <div className="row">
                <div className="input_container">
                    <div>
                        <h1 className='text-center'>Login With</h1>
                        <div className="row log_btn">
                            <img src={google} alt=""/>
                            <button onClick={handleGoogleSignIn}>Continue with Google</button>
                        </div>
                        <p><span>Don’t have an account?</span> <Link onClick={handleGoogleSignIn}>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;