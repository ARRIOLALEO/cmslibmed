import React , {useContext,useState , useEffect} from 'react'
import {auth} from "../firebase"
const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({childen}) {
    const [currentUser , setCurrentUser] = useState(null);
    
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user =>{
            setCurrentUser(user);
        })
        return unsubscriber
    }, [])
    
    const value ={
        currentUser,
        signup
    }
    return (
     <AuthContext.Provider value={value}>
         {childen}
     </AuthContext.Provider>
    )
}
