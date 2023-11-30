'use client'
import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { Button } from '@nextui-org/react'
import { removeProductCart } from '@/src/redux/slice'

const DetailPurchased = () => {
  const dispatch=useDispatch()
  const Purchased = useSelector((state)=>state.storeShopping.listaProductos)
  console.log(Purchased)
  const handlerRemove= (id)=>{
   dispatch(removeProductCart(id))
  }
  const calcularTotal = () => {
    const totalPrecio = Purchased.reduce((total, producto) => {
      const precioNumerico = parseFloat(producto.precio);
      return total + precioNumerico;
    }, 0).toFixed(1);
    return totalPrecio
  };
  return (
    <div >
      <div className=' w-full flex justify-evenly'>    
        {Purchased?.length === 0? <div>
          <p>NO hay Productos</p>
        </div>:
       
        <div className=''>
         {Purchased?.map((P)=>{
  
          return(
            
            <div key={P.id} className="max-w-sm flex  rounded overflow-hidden shadow-lg m-4">
            <img src={P?.imagen?.secure_url} alt={P.nombre} className="w-64 h-64 object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{P?.nombre}</div>
              <p className="text-gray-700 text-base">${P?.precio}</p>
              <Button onClick={()=>handlerRemove(P.id)}>
                  Remove
              </Button>
            </div>
         
          </div>
          )
         })}
        </div>
         }
         <div className='fixed right-20 h-20'>
          <p>{calcularTotal()} precio</p>
         </div>
        </div>  
    </div>
  )
}

export default DetailPurchased