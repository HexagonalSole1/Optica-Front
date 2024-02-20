// Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarruselNav.css';

const CarruselNav = () => {
  const phrases = [
    "Meses Sin Intereses pagando con Mercado Pago y Paypal",
    "Rastrea tu pedido AQUÍ",
    "Servicios Online y en Tienda",
    "Envíos gratis a partir de $700",
  ];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Oculta el botón de siguiente
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {phrases.map((phrase, index) => (
          <div key={index} className="slide">
            <p>{phrase}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarruselNav;
