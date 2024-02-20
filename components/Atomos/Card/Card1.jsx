import React from 'react'
import Image from 'next/image'
import Boton from '../boton/Boton'
import "./Card1.css"

function Card1(props) {
  return (
   

    <div className="divPaquete">

    <div className="imgPaquete">
        <Image
            src={props.urlImg}
            alt="Descripción del icono"
            width={428}
            height={533}


        />

    </div>

    <Boton
        titulo="Comprar Paquete"

    />
</div>
  )
}

export default Card1