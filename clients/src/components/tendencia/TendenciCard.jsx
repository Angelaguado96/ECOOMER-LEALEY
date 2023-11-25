"use client"
import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import TrendenciList from "./TrendenciList";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import {allProductos} from '@/util/http'
import Link from 'next/link'

const TendenciCard = () => {
     
 
  const dispatch = useDispatch();
  const datos = useSelector((state)=>state.storeShopping.dataProductos)
   const tendencia = datos.filter((item)=>item.tendencia === 'true')
  useEffect(() =>{
     dispatch(allProductos())
  },[dispatch])



  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-10">
      <TrendenciList></TrendenciList>
    
      {tendencia.map((item, index) => (
        
        <Card
          shadow="sm"
          key={index}
          isPressable
         
        >
          <CardBody className="overflow-visible p-0">
            <Link href={`detalles/${item.id}`}>   
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt='iamgen'
              className="w-full object-cover h-[140px]"
              src={item.imagen.secure_url}
            />
            </Link> 
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.nombre}</b>
            <p className="text-default-500">{item.precio}</p>
          </CardFooter>
        </Card>
      ))}
    
    </div>
  );
};

export default TendenciCard;
