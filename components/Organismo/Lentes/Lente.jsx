import React from 'react'
import "./Lente.css"
import Image from 'next/image';
import Boton from '@/components/Atomos/boton/Boton';
import LenteCom from '@/components/Atomos/lenteCom/lenteCom';

function Lente() {
    return (
        <>
            <div className='paginaPaquetes'>
              

                <div className="divPaquetes">


                    <div className="divPaquete">

                        <LenteCom
                        titulo1="Oftálmicos"
                        titulo2="Xikú"
                        imagen="/lentes1.webp"
                        precio="1,799"
                        />
                    </div>

                    <div className="divPaquete">
                    <LenteCom
                        titulo1="Clip-on"
                        titulo2="Xikú"
                        imagen="/lentes2.webp"
                        precio="2,399"
                        />
                   
                    </div>
                    <div className="divPaquete">
                    <LenteCom
                        titulo1="Solares"
                        titulo2="Xikú"
                        imagen="/lentes3.webp"
                        precio="2,999"
                        />
                    </div>


                </div>
            </div>
        </>

    )
}

export default Lente