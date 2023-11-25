import Image from 'next/image';
import { Button } from "@nextui-org/react";
import Link from 'next/link'
import TendenciCard from '../tendencia/TendenciCard.jsx';
 import LadigProduct from '../portadaDeProcuctos/LadigProduct.jsx';
import PreguntasFrecuentes from '../preguntas/PreguntasFrecuentes';
 import Footers from '../footer/Footers';
import  Carrusel from '../carrusel/Carrusel'



const Home = () => {
  return (


    <div  className=" md:flex-row" >
       <Carrusel/>
    <main className="flex flex-col md:flex-row justify-between items-center py-10 mb-5 relative">
      <section className="w-full md:max-w-xl md:w-1/2 py-6 mx-auto sm:mx-0 md:ml-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold py-9 w-full">
          LO NUEVO & TENDENCIA
        </h1>
        <p className="py-3 text-sm text-gray-600">
          Descubre la esencia de la moda con nosotros. Lleva lo mejor de la
          tienda a casa con ofertas irresistibles y calidad de tela
          incomparable. ¡No te pierdas nuestras promociones 2x2 y sigue
          añadiendo estilo a tu vida!
        </p>
        <section className="flex flex-col md:flex-row items-center">

        <Link  href="" > 
            <Button  color="danger">Start Shopping</Button>
            </Link>

          <Link href="/" color="danger">
            Explore mas ..
          </Link>
        </section>
      </section>
      <section className="w-full md:w-1/2 lg:w-1/2 lg:flex justify-end">
        <img src='https://img.freepik.com/foto-gratis/retrato-hermosa-mujer-morena-sexy-linda-feliz-labios-rojos-amplios-pantalones-clasicos-sobre-fondo-blanco_158538-9385.jpg' alt="bannerImg" className="rounded-lg w-80 max-h-50 h-50 mr-20 "  />
      </section>
    </main>
     <TendenciCard/>
     <LadigProduct/>
     <PreguntasFrecuentes/> 
    <Footers/>   
    </div>
    
  );
};

export default Home;
