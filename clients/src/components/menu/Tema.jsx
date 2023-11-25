"use client"
import React from "react";
import {Switch} from "@nextui-org/react";
 import { useState,useEffect } from "react";
 import { IoIosCheckmarkCircle , IoIosCheckmarkCircleOutline } from "react-icons/io";



const Tema =()=> {
  
   const [isDarkTheme,setIsDarkTheme] = useState("light")

    const handdlerThemeChanger=()=>{
      setIsDarkTheme(prevTheme=> prevTheme === "light" ? "dark": "light")
    }


    useEffect(() => {
     if(isDarkTheme=== "dark"){
      document.querySelector("html").classList.add("dark")
     }else{
      document.querySelector("html").classList.remove("dark")
     }
    }, [isDarkTheme])
    


  return (
    <Switch
      defaultSelected
      size="lg"
      color="danger"
      startContent={<IoIosCheckmarkCircle />}
      endContent={<IoIosCheckmarkCircleOutline />}
      onChange={handdlerThemeChanger}
    >
    </Switch>
  );
}
export default Tema