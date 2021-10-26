import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()
    const googleSingIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    const hendelForm = (e) => {
        e.preventDefault()
    }
    const googleSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(result => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
            return () => unsubscribed;
        })
    }, [])

    return { googleSingIn, user, error, hendelForm, googleSignOut, isLoading }
}

export default useFirebase;