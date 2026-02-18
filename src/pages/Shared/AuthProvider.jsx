import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // const sign


    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser?.email) {
                axios.post('http://localhost:3000/jwt', { email: currentUser.email }, { withCredentials: true })
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error))
            }


            // if (currentUser?.email) {
            // const userData = { email: currentUser.email };
            // axios.post('http://localhost:3000/jwt', userData, {
            //     withCredentials: true
            // })
            //     .then(res => {
            //         console.log(res.data);
            //     })
            //     .catch(error => console.log(error))

            //  axios.post('http://localhost:3000/jwt', userData)
            //                     .then(res => {
            //                         console.log('token after jwt', res.data);

            //                         0


            //                         /*** We won't use it like this..
            //                          */

            //                         // const token = res.data.token;
            //                         // localStorage.setItem('token', token);
            //                     })
            //                     .catch(error => console.log(error))
            // }
            console.log('user in the auth state changed', currentUser);
        })
        return () => {
            unSubscribe();
        }
    })

    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;