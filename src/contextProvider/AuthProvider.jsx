// @flow strict

import * as React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
     signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = React.createContext(null)

const auth = getAuth(app);

function AuthProvider({children}) {
const [user, setUser] = React.useState(null);
const [loading, setLoading] = React.useState(true)
const googleProvider = new GoogleAuthProvider();
const axiosPublic = useAxiosPublic()

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn =( email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

const logOut = () => {
    setLoading(true)
    return signOut(auth);
}

const updateUserProfile = (name, photo) => {
   return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

React.useEffect( () => {
 const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if(currentUser){
            const userInfo = {email: currentUser.email};
            axiosPublic.post('/jwt', userInfo)
            .then(res => {
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                    setLoading(false)
                }
                
           
            })
        }
        else{
            // do something (remove token)
            localStorage.removeItem('access-token')
            setLoading(false)
        }
       
    })
    return () => {
        return unsubscribe();
    }
}, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut, 
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;