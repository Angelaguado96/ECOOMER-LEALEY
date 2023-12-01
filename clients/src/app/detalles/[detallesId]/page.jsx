"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productosOne } from "@/util/http";
import { useEffect,useState } from "react";
import { Button} from "@nextui-org/react";
import Validate from "@/util/ValidateProduct";
import { addProductosToCart } from "@/src/redux/slice";
import { toast } from "react-hot-toast";
import AddCart from "@/src/components/modal/AddCart";





const Datelles = ({ params }) => {
  
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      dispatch(productosOne(params.detallesId));
    }, [dispatch]);

  const info = useSelector((state) => state.storeShopping.dataOneProductos);
 console.log(info)
 const [error,seterror]=useState({})
 const [datos,setdatos]=useState({
  id:'',
  nombre:'',
   tipo:'',
   imagen:'',
   categoria:'',
   precio:'',
   colores:'',
   tallaAdulto:'',
   tallaKit:''
 })
const handlerTallaA=(talla)=>{
  setdatos((prevDatos)=>({
    ...prevDatos,
    tallaAdulto:talla
  }))
  seterror(Validate({...datos,
  tallaAdulto:talla}))
}
const handlerTallaK=(talla)=>{
  setdatos((prevDatos)=>({
    ...prevDatos,
    tallaKit:talla
  }))
  seterror(Validate({...datos,
    tallaKit:talla}))
}

 const handlerColor=(colores)=>{
  setdatos((prevDatos)=>({
    ...prevDatos,
    colores:colores
  }))
  seterror(Validate({...datos,colores:colores}))
 }

   const  handlerProducto=(infom)=>{
   dispatch(addProductosToCart(infom))
  
   toast.success("Añadido a la bolsa con éxito");
  }
  const ShowSuccessModal =()=>{
   setShowModal(true)
  }
  const CloseModal=()=>{
   setShowModal(false)
  }
  
  useEffect(() => {
    if (info) {
      setdatos((prevDatos) => ({
        ...prevDatos,
        id: info.id || "",
        nombre: info.nombre || "",
        tipo: info.tipo || "",
        imagen: info?.imagen?.secure_url || "",
        categoria: info.categoria || "",
        precio: info.precio || "",
      }));
    }
  }, [info]);

  return (
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              {info.imagen && (
                <img
                  src={info?.imagen?.secure_url}
                  alt="Two each of gray, white, and black shirts arranged on table."
                  className="object-cover object-center"
                />
              )}
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {info.nombre}
              </h2>
              <h3>marca : {info.marca}</h3>
              <h3>marca : {info.id}</h3>
              <section aria-labelledby="information-heading" className="mt-2">
                <p className="text-2xl text-gray-900">${info.precio}</p>

                <div className="mt-6">
                  <div className="mr-25">
                    <h6> stock {info.stock}</h6>
                  </div>
                  <br />
                  <label> Infomacion </label>
                  <br />
                  <h4>{info.descripcion}</h4>
                  <h4 className="sr-only">Reviews</h4>
                  <br />
                  Reviews
                  <div className="flex items-center">
                    <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      117 reviews
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <form>
                <div>
  <h4 className="text-sm font-medium text-gray-900">Color</h4>
  <fieldset className="mt-4">
    <div>
      {info?.colores?.map((c) => {
        return (
          <button
            onClick={(e) => {
              e.preventDefault();
              handlerColor(c);
            }}
            style={{
              marginLeft: "2px",
              marginRight: "2px",
              width: "2em",
              height: "2em",
              borderRadius: "50%",
              backgroundColor: `${c}`,
              border:'solid gray 1px'
            }}
          ></button>
        );
      })}
    </div>
  </fieldset>
      {error.colores && <span>{error.colores}</span>}
</div>

                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">
                        Size
                      </h4>
                    </div>

                    <fieldset className="mt-4">
                      <div className="grid grid-cols-4 gap-4">
                       { info?.tallaAdulto?.length > 0 ? 
                       <div className="flex justify-around items-center w-full">
                      {   info?.tallaAdulto?.map((t)=>{
                           return(
                            
                              <Button onClick={()=>handlerTallaA(t)}  className="p-4 shadow-2xl  mb-6 ml-1 mr-1 bg-gray-400 rounded-md">
                               {t}
                              </Button>
                            
                            )
                          })}
                       </div>:
                       <div className="flex justify-around items-center w-full">
                        { info?.tallaKit?.map((t)=>{
                          return(
          
                               <Button onClick={()=>handlerTallaK(t)} className="p-4 shadow-2xl  mb-6 ml-1 mr-1 bg-gray-400 rounded-md">
                                {t}
                               </Button>
                           
                           )
                          })}
                       </div>
                       }
                      </div>
                    </fieldset>
                    <div>
                    {error.Talla && (<spam>{error.Talla}</spam>) }
                       
                    </div>
                  </div>
                  <div>
                  <Button
 onClick={() => {
  if (!datos.tallaAdulto && !datos.tallaKit) {
    toast.error("Por favor, seleccione una talla");
  } else if (!datos.colores) {
    toast.error("Por favor, seleccione un color");
  } else {
    handlerProducto(datos);
    ShowSuccessModal();
  }
}}
  className="mt-6 flex w-full items-center justify-center rounded-md  py-3 text-base  text-white focus:outline-none "
  color="danger"
>
  Add to bag {info.nombre}
</Button>

      </div>
  
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
{showModal && <AddCart onClose={CloseModal}/>}
    </div>
  );
};

export default Datelles;