"use client"
import React from "react";

import {users} from "./data";
import { useState ,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {myProducts} from '@/util/http';





export default function miProducts() {

   const dispatch=useDispatch()
 const product = useSelector((state)=> state.storeShopping.historyProduct)
 const myProduct = [product]
 console.log(myProduct)


  //* conjo el id del localstore
 const userId = JSON.parse(localStorage.getItem('token')).id;
 

  useEffect(() => {
   dispatch(myProducts(userId))
  }, [])
  


  return (
   <div>
    <div className="bg-gray-700  rounded-lg m-8 border-20 p-8">
        <div className="bg-white justify p-4 mb-4 rounded-lg mr-4">
         <p>Nombre</p>
         <p>precio</p>
         <p>categoria</p>
         <p>talla</p>
         <p>cantidad</p>
        </div>
        <div className="bg-white p-4 mb-4">Div 2 (Blanco)</div>
        <div className="bg-white p-4">Div 3 (Blanco)</div>
    </div>
    </div>
  );
}
