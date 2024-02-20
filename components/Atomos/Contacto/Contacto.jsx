import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from "./Contacto.module.css";
import Boton from '../boton/Boton';
import Image from 'next/image'


const img1 = "/mujer.webp"


function Contacto() {
  const producto1 = {
    urlLogo: "/medicina1.webp",
    nombre: "BAUSCH & LOMB",
    descripcion: "Esta es una descripción de ejemplo.",
    precio: 19.99,
  };
  const producto2 = {
    urlLogo: "/medicina2.webp",
    nombre: "BAUSCH & LOMB",
    descripcion: "Esta es una descripción de ejemplo",
    precio: 19.99,
  };

  const producto3 = {
    urlLogo: "/medicina3.webp",
    nombre: "BAUSCH & LOMB",
    descripcion: "Esta es una descripción de ejemplo",
    precio: 19.99,
  };

  const lentes = [producto1, producto2, producto3,producto1, producto2, producto3,producto1, producto2, producto3];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // Oculta el botón de siguiente
  };

  return (
<div>
<div className='tituloPaquete'>
    <h2>Lentes de <span> contacto</span> </h2> 
    </div>
    <div className={Style.PaginaCarouselLentes}>
      <div className={Style.divCarouselIzquierdo}>
      <Image src={img1}
          width={800}
          height={430}
          objectFit="contain" layout="responsive"
        />
        <div className='tituloPaquete'>
    <h2>No te pierdas las <span> Mejores Promociones</span> </h2> 
    </div>
    <Boton
    titulo={"  ¡Comprar Ahora!  "}
    />
      </div>

      <div className={Style.divCarouselDerecho}>
        <div className={Style.carousel_container2}>
          <Slider {...settings}>
            {lentes.map((lente, index) => (
              <div key={index} className={Style.slide2}>
                <img src={lente.urlLogo} alt={lente.nombre} />
                <button className={Style.btncarrucelLentes}>Ver Detalle</button>
                <h3>{lente.nombre}</h3>
                <p className={Style.pDemas}>{lente.descripcion}</p>
                <p className={Style.pPrecio}>  ${lente.precio}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
</div>
  );
}

export default Contacto;
