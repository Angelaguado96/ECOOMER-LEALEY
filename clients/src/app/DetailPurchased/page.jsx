'use client'
import React from 'react'
import {  useSelector } from 'react-redux'

const DetailPurchased = () => {
  const Purchased = useSelector((state)=>state.storeShopping.listaProductos)
  console.log(Purchased)
  return (
    <div >
      <div className='flex'>    
        {Purchased.length === 0? <div>
          <p>NO hay Productos</p>
        </div>:
       
        <div>
         {Purchased?.map((P)=>{
          return(
            
            <div className="max-w-sm flex rounded overflow-hidden shadow-lg m-4">
            <img src={P.imagen.secure_url} alt={P.nombre} className="w-full h-64 object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{P.nombre}</div>
              <p className="text-gray-700 text-base">${P.precio}</p>
            </div>
          </div>
          )
         })}
        </div>
         }
         <div>
          <p>el precio</p>
         </div>
        </div>  
    </div>
  )
}

export default DetailPurchased