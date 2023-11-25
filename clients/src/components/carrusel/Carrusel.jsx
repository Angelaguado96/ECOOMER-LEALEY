"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";

const Carrusel = () => {
  const info = useSelector((state) => state.storeShopping);

  const general = info.dataCarrusel.filter(
    (item) => item.categoria === "general"
  );

  return (
    <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false}>
      {general?.map((item, index) => (
        <div key={index} className="w-30 justify-center  m-20  flex items-center h-80">
          <img src={item.imagen.secure_url} className="max-w-full" alt="imagen" />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrusel;
