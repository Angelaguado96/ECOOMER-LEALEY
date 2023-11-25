"use client"
import React, { createContext,useContext, useState,useEffect } from 'react';
import {loginRequest,logoutRequest} from '@/src/api/auth'
import { toast } from "react-hot-toast";
import { gapi } from "gapi-script";
const ThemeContext = createContext();
const clientID =
  "803702882587-60c5tpkaudh0hpj51pmb9ikfv37jjota.apps.googleusercontent.com";
  import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'


export const useTheme = () => {
  const  contex  = useContext(ThemeContext);
  if (!contex) return "NO HAY CONTEXTO ";
  return contex;
};


  
  export const ThemeProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null);
    console.log("esatdo local " ,user)
    const [isAutorisado, setAutorisado] = useState(false);
  console.log(isAutorisado)
  const [loding, setLoding] = useState(true);

    const responseGoogle = async (response) => {
  
      console.log("soy google " ,response)
     try {
    
      const datosGoogle = {
        
        correo: response?.profileObj?.email,// no deberia estasr
        contraseña: response?.profileObj?.googleId,// no deberia estasr
       imageUrl: response?.profileObj?.imageUrl,
        nombre: response?.profileObj?.name,
      };

      console.log("clear ", datosGoogle)
      setUser(datosGoogle)
      const {data} = await loginRequest(datosGoogle)
      console.log('soy data',data)
      localStorage.setItem("token",JSON.stringify(datosGoogle))
      setAutorisado(true)
      singin(datosGoogle)
     } catch (error) {
       console.log(error);
     }
   };


    // esto verifica si hay token  em  localStore
   const cargarUsuarioDesdeLocalStorage = () => {
    const storedUserData = localStorage.getItem('token');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUser(userData);
      setAutorisado(true);
    }
  };

    useEffect(() => {
      const start = () => {
        gapi.auth2.init({
          clientId: clientID,
        });
      };
    
      gapi.load("client:auth2", start);
    }, []); 




   const singin = async (user)=>{
    try {
      console.log("todo llega aqui", user )
      const {data} = await loginRequest(user)
      console.log('soy data',data)
      localStorage.setItem("token",JSON.stringify(data))
      setUser(data)
      setAutorisado(true)
    } catch (error) {
       console.log(error)
      if(error.response){
      toast.error(error.response.data.message)
       }
    }
   }


   
   const singUp = async ()=>{

    try {
       const {data}= await logoutRequest()
       console.log("data de  logout" ,data)
      setAutorisado(false)
      setUser(null)
      localStorage.removeItem('token'); 
    } catch (error) {
     console.log(error)
    }
   }

   useEffect(() => {
    
     const chekLogin= async () =>{
      const cookies = Cookies.get()
      if(!cookies.token){
        setAutorisado(false)

      }
   
 

     }
   
    chekLogin()
   }, [])
   

  return (
    <ThemeContext.Provider value={{singin,user,singUp,responseGoogle, isAutorisado,cargarUsuarioDesdeLocalStorage,clientID }}>
      {children}
    </ThemeContext.Provider>
  );
};
 
