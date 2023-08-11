import { ReactNode, createContext, useState } from "react";
import { LoginData } from "../pages/Login/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ClientData } from "../pages/Register/validators";


interface AuthorizationContextValues{
    login: (data: LoginData) => Promise<void>
    registerUser: (formData: ClientData) => Promise<void>
    user:ClientData | undefined 
}
interface AuthorizationProviderProps{
    children:ReactNode
}

export const AuthorizationContext = createContext({}as AuthorizationContextValues)

export const AuthProvider = ({children}:AuthorizationProviderProps)=>{
    const[user,setUser] = useState()
    const navigate = useNavigate();


    const login = async(data:LoginData)=>{
        try {
        const response = await api.post("/login", data);
        const {token} = response.data;
        api.defaults.headers.common.Authorization= `Bearer ${token}`;
        localStorage.setItem("@TOKEN", token)
        setUser(response.data.user)
        setTimeout(() => {
            navigate("/admin");
          }, 1500); //falta fazer a verificação de token, para reredicionar para as paginas corretas entre admin e user

        } catch (error) {
            console.log(error)
        }
    }


    const registerUser = async (formData:ClientData) => {
        try {
            const response = await api.post("/users", formData)
       
            setTimeout(() => {
                navigate("/login");
              }, 1500);
          
            setUser(response.data.user);
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <AuthorizationContext.Provider value={{login, registerUser, user}}>
            {children}
        </AuthorizationContext.Provider>
    )
}