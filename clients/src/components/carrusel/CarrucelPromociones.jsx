"use client";
//  exportacion de  hook
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// exportacion de  componentes
import { allCarrucel } from "@/util/http";

const CarrucelPromociones = () => {
  const dispatch = useDispatch();
  
  const datos = useSelector((state) => state.storeShopping);

  const promociones = datos?.dataCarrusel.filter(
    (item) => item.categoria === "promociones"
  );

  useEffect(() => {
    dispatch(allCarrucel());
  }, [dispatch]);

  return (
    <Carousel
      infiniteLoop
      autoPlay
      showArrows={false}
      showThumbs={false}
      className="text-right" // Agrega la clase CSS para alinear a la derecha
    >
      {promociones?.map((image, index) => (
        <div key={index} className="w-30 m-6 h-80">
          <img src={image.imagen.secure_url} alt="imagen" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarrucelPromociones;
