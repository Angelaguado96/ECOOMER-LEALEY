"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productosOne } from "@/util/http";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { addProductosToCart } from "@/src/redux/slice";






const Datelles = ({ params }) => {
  
  const dispatch = useDispatch();

  const info = useSelector((state) => state.storeShopping.dataOneProductos);
   const lista = useSelector((state)=> state.storeShopping.listaProductos)
   console.log(lista)


  useEffect(() => {
    dispatch(productosOne(params.detallesId));
  }, [dispatch]);


  const  handlerProducto=(infom)=>{
      console.log(infom)
   dispatch(addProductosToCart(infom))
  }
//  const fun = handlerProducto(info) 
 console.log(addProductosToCart(info))
  return (
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              {info.imagen && (
                <img
                  src={info.imagen.secure_url}
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
                      <span className="flex items-center space-x-3">
                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="White"
                            className="sr-only"
                            aria-labelledby="color-choice-0-label"
                          />

                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                          ></span>
                        </label>

                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Gray"
                            className="sr-only"
                            aria-labelledby="color-choice-1-label"
                          />

                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
                          ></span>
                        </label>

                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Black"
                            className="sr-only"
                            aria-labelledby="color-choice-2-label"
                          />

                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
                          ></span>
                        </label>
                      </span>
                    </fieldset>
                  </div>

                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">
                        Size
                      </h4>
                    </div>

                    <fieldset className="mt-4">
                      <div className="grid grid-cols-4 gap-4">
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="S"
                            className="sr-only"
                            aria-labelledby="size-choice-2-label"
                          />
                          <span id="size-choice-2-label">S</span>

                          <span
                            className="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="M"
                            className="sr-only"
                            aria-labelledby="size-choice-3-label"
                          />
                          <span id="size-choice-3-label">M</span>

                          <span
                            className="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input
                            type="radio"
                            name="size-choice"
                            value="L"
                            className="sr-only"
                            aria-labelledby="size-choice-4-label"
                          />
                          <span id="size-choice-4-label">L</span>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div> 

                  <Button
  onClick={() => handlerProducto(info)}
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
    </div>
  );
};

export default Datelles;
