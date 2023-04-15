import { useState, useEffect, useContext, createContext } from "react";
import { onAuthStateChanged, signOut as authSignOut } from 'firebase/auth'
import { auth } from "./firebase";



const authUserContext = createContext({
    authUser: null,
    isLoading: true
})



export default function useFireBaseAuth() {
    const [authUser, setAuthUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)



    const clear = () => {
        setAuthUser(null)
        setIsLoading(false)
    }



    const authStateChanged = async (user) => {
        setIsLoading(true)
        if (!user) {
            clear()
            return
        }

        setAuthUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName
        })
        setIsLoading(false)
    }



    const signOut = () => {
        authSignOut(auth).then(() => clear())
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        setAuthUser,
        isLoading,
        signOut
    }

}



export const AuthUserProvider = ({ children }) => {
    const auth = useFireBaseAuth()
    return (
        <authUserContext.Provider value={auth} >
            {children}
        </authUserContext.Provider>
    )
}



export const useAuth = () => useContext(authUserContext)
