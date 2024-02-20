import  CarouselComponent from '@/components/Atomos/ComponentCarousel/CarouselComponent.jsx';
import Image from 'next/image';



const Images = [

"/carrucel3-1.webp",
"/carrucel3-2.webp",
"/carrucel3-3.webp"

];



function CarouselColab() {
    return (
<>
    <div  className='tituloPaquete'>
    <h2>Nuestras <span> colaboraciones</span> </h2> 
    </div>
  <CarouselComponent
    images={Images}
  />
</>
    );
  }
  
  export default CarouselColab;
  