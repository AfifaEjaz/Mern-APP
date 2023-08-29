import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import Cookies from 'js-cookie';
// import jwt_decode from "jwt-decode";


export const GlobalContext = createContext("Initial Value")

// const decodeUser = (jwt_token) => {
//     if (!jwt_token) {
//         return undefined
//     }
//     else {
//         return jwt_decode(jwt_token)
//     }

// }

// const getUserDetails= () => {
    // const token_data = 
//     console.log("ye hai", token_data)

//     if(token_data == "undefined"){
//         return undefined
//     }
//     else{
//         jwt_decode(token_data)
//     }
// }

// const token = Cookies.get('token')

let data = {
    // user: decodeUser(Cookies.get('token')),
    // user : Cookies.get('token')
    // role : undefined,
    // token: Cookies.get('token') 
    user: "user",
    token : Cookies.get('token') || undefined
};


export default function GlobalContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, data);

    useEffect(() => {
        Cookies.set('token', state.token)
    },[state.token])


    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}