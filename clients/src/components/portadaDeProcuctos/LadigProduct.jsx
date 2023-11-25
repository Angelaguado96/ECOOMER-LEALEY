"use client"
import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";
 import CarrucelPromociones from'../carrusel/CarrucelPromociones'
import Link from 'next/link';


const LadigProduct = () => {

   return (
     
    <div className="flex-container">
    <h1 className="m-10">CATEGORIA</h1>
    <div className="flex flex-wrap -m-2">
      <Card
        isFooterBlurred
        className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/5 h-[400px] ml-4 col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-xl md:text-2xl">
            Hombres
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-[250px] sm:h-full scale-100 md:scale-125 -translate-y-6 object-cover"
          src="https://i.pinimg.com/564x/ed/9e/56/ed9e568438129c3e0aa3307ab7422e7b.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">No te quedes con las ganas ..</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
           <Link href='/store/storeHombre'> 
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            ver Tienda
          </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5 h-[400px] m-2 col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-xl md:text-2xl">
            Mujeres
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-[250px] sm:h-full scale-100 md:scale-125 -translate-y-6 object-cover"
          src="https://i.pinimg.com/564x/7b/9c/f2/7b9cf27745f96685180c1b831ae7e474.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">No te quedes con las ganas ..</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
           <Link href='/store/storeMujer'> 
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            ver Tienda
          </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full sm:w-1/2 md:w-1/6 lg:w-1/4 xl:w-1/5 h-[400px] m-2 col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-xl md:text-2xl">
           Niños
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-[250px] sm:h-full scale-100 md:scale-125 -translate-y-6 object-cover"
          src="https://i.pinimg.com/564x/89/cf/40/89cf40ce754e9ddeaf2ed643cb714a84.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">No te quedes con las ganas ..</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Link href='/store/storeChildren'>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            ver Tienda
          </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5 h-[400px] ml-2 col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-xl md:text-2xl">
            Niñas
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-[250px] sm:h-full scale-100 md:scale-125 -translate-y-6 object-cover"
          src="https://i.pinimg.com/564x/bf/02/8e/bf028e9e53959f0db44dc6c21893da5f.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">No te quedes con las ganas ..</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
            <Link href='/store/storeGrils' > 
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            ver Tienda
          </Button>
          </Link>
        </CardFooter>
      </Card>
      <div className="">
      <CarrucelPromociones />
    </div>
      </div>
     
    </div>
    
    
    );
}

export default LadigProduct
