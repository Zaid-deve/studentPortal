import { createContext, useState,useEffect } from "react";

export const AuthProvider = createContext();

export default function Auth({ children }) {
    const [user, setUserDetails] = useState({
        isLogin: false,
        token: false,
        userDetails: {}
    })

    function setUser(d){
        sessionStorage.setItem('userDetails', JSON.stringify(d));
        setUserDetails({...user,...d});
    }

    useEffect(() => {
        const d = JSON.parse(sessionStorage.getItem('userDetails')) || {}
        setUserDetails({...user,...d});
    }, [])

    const logout = () => {
        setUserDetails({
            isLogin: false,
            token: false,
            user: {}
        });
    }

    return (
        <AuthProvider.Provider value={{ user, setUser,logout }}>{children}</AuthProvider.Provider>
    )
}