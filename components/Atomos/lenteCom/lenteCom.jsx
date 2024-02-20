import React from 'react'
import Boton from '../boton/Boton'
import "./lenteCom.css"
import Image from 'next/image';

function lenteCom(props) {
  return (
    <div className="divPaquete">
    <p className='titleLentes'><span>{props.titulo1}</span> {props.titulo2}</p> 

     <div className="imgPaquete">
         <Image
             src={props.imagen}
             alt="Descripción del icono"
             width={350}
             height={180}


         />

     </div>
     <h3>desde <span>${props.precio}</span></h3>
     <Boton
         titulo="¡Comprar Ahora!"

     />
 </div>

  )
}

export default lenteCom