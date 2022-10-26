import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) =>{

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({
        email: null,
        name: null,
        uid: null,
        photoUrl: null
    });

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };
    
    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const loginWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const regWithEmailPass = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserOnRegistration = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    };

    const loginWithEmailPass = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return (()=>{
            unsubscribe();
        });
    }, [auth])

    const allValues = {
        user, setUser, loginWithGoogle, loginWithGithub, logOut, regWithEmailPass, updateUserOnRegistration, loginWithEmailPass
    };
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;