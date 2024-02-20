import React from 'react'
import "./Paquete.css"
import Image from 'next/image';
import Boton from '@/components/Atomos/boton/Boton';
import Card1 from '@/components/Atomos/Card/Card1';

function Paquete() {
    return (
        <>
            <div className='paginaPaquetes'>
                <div className='tituloPaquete'>
                    <h2>Paquetes <span> oftalmico</span> </h2> 
                    <p>Mejoralos con nuestros upgrades</p>


                </div>


                <div className="divPaquetes">


                    <Card1
                    urlImg="/paquete1.webp"
                    />


                    <div className="divPaquete">
                    <Card1
                    urlImg="/paquete2.jpg"
                    />

                    </div>
                    <div className="divPaquete">
                    <Card1
                    urlImg="/paquete3.webp"
                    />
                    </div>


                </div>
            </div>
        </>

    )
}

export default Paquete