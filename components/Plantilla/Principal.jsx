import React, { useContext } from 'react'
import Style from "./Principal.module.css"
import Nav from '../Organismo/Nav/Nav'
import Footer from '../Organismo/Footer/Footer';
import Paquete from '../Organismo/Paquetes/Paquete';
import CarruselNav from "@/components/Atomos/carruselNav/carruselNav"
import Carousel from '../Organismo/Carousel/Carousel.jsx'
import CarouselColab from '../Organismo/Carousel/CarouselColab.jsx'
import Lente from '../Organismo/Lentes/Lente';
import CarouselLentes from '@/components/Organismo/CarouselLentes/CarouselLentes';
import Contacto from '../Atomos/Contacto/Contacto';
import TiposLentes from '../Organismo/TiposLentes/TiposLentes';

function Principal() {





    return (


        <div className={Style.DivBody}>
            <CarruselNav />
            <Nav />
            <Carousel/>
            <Lente/>
            <CarouselLentes/>
            <Paquete />
            <Contacto/>
            <CarouselColab/>
            <TiposLentes/>
            <Footer />

        </div>





    )
}

export default Principal