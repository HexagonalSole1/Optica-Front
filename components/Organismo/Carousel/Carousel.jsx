import  CarouselComponent from '@/components/Atomos/ComponentCarousel/CarouselComponent.jsx';
import CarouselLittle from '@/components/Atomos/ComponentCarousel/CarouselLittle';
import Image from 'next/image';



const Images = [

"/carrusel1.webp",
"/carrusel2.webp",
"/carrusel3.webp"

];

const Images2 = [

"/carrusel2-1.webp",
"/carrusel2-2.webp",
"/carrusel2-3.webp",
"/carrusel2-4.webp",
  ];



function Carousel() {
    return (
<>
  <CarouselComponent
    images={Images}
  />
    <div className='tituloPaquete'>
    <h2>Marca <span> exclusiva</span> </h2> 
    </div>
  <CarouselLittle
  images={Images2}
/>
</>
    );
  }
  
  export default Carousel;
  