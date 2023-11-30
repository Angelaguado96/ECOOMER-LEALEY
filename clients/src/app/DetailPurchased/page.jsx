'use client'
import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { Button } from '@nextui-org/react'
import { removeProductCart } from '@/src/redux/slice'

const DetailPurchased = () => {
  const dispatch=useDispatch()
  const Purchased = useSelector((state)=>state.storeShopping.listaProductos)
  console.log(Purchased)
 
  const handlerRemove = (productToRemove) => {
    dispatch(removeProductCart(productToRemove));
  };

  
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
          <p>No hay Productos</p>
        </div>:
       
        <div className=''>
         {Purchased?.map((P)=>{
  
          return(
            
            <div key={P.id} className="max-w-sm flex  rounded overflow-hidden shadow-lg m-4">
            <img src={P?.imagen?.secure_url} alt={P.nombre} className="w-64 h-64 object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{P?.nombre}</div>
              <p className="text-gray-700 text-base">${P?.precio}</p>
              <p>Category:{P.categoria}</p>
              <p className=' flex items-center'>Color:<span style={{padding:'0.2em', width: '2em',
                              height: '2em', 
                              borderRadius: '50%', 
                              backgroundColor: `${P?.colores}`,
                              marginLeft:'2px',
                              color:'transparent',
                               fontSize:'0.5em'}}>p</span></p>
                               <p className='flex items-center'>
                               Size:{P?.tallaAdulto ? <p>{P.tallaAdulto}</p>: <p>{P.tallaKit}</p> }
                               </p>
              <Button onClick={()=>handlerRemove(P)}>
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