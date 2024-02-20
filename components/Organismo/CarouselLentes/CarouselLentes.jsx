import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselLentes.css';
import LenteCom2 from '@/components/Atomos/lenteCom2/LenteCom2';

function CarouselLentes() {
  const producto1 = {
    urlLogo: "/lentesC1.webp",
    nombre: "Producto Ejemplo 1",
    descripcion: "Esta es una descripción de ejemplo para el producto 1.",
    precio: 19.99,
  };
  const producto2 = {
    urlLogo: "/lentesC2.webp",
    nombre: "Producto Ejemplo 2",
    descripcion: "Esta es una descripción de ejemplo para el producto 2.",
    precio: 19.99,
  };

  const producto3 = {
    urlLogo: "/lentesC3.webp",
    nombre: "Producto Ejemplo 3",
    descripcion: "Esta es una descripción de ejemplo para el producto 3.",
    precio: 19.99,
  };

  const lentes = [producto1, producto2, producto3,producto1, producto2, producto3,producto1, producto2, producto3];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Oculta el botón de siguiente
  };

  return (
    <div className='PaginaCarouselLentes'>
      <div className='divCarouselIzquierdo'>
        <p>Lentes oftálmicos</p>
        <h2>Nuestros más vendidos</h2>
        <a href="https://.com">Compra ahora</a>
      </div>

      <div className='divCarouselDerecho'>
        <div className="carousel-container2">
          <Slider {...settings}>
            {lentes.map((lente, index) => (
              
<div key={lente.index} className="slide2">
<LenteCom2
urlLogo={lente.urlLogo}
nombre={lente.nombre}
descripcion={lente.descripcion}
precio={lente.precio}
/>
</div>



            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarouselLentes;
