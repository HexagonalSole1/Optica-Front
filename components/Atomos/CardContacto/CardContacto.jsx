import React from 'react'
import Image from 'next/image'
import Style from '@/components/Atomos/CardContacto/CardContacto.module.css'

function CardContacto(props) {
  return (
    <>
    <img src={props.urlLogo} alt={props.nombre} />
    <button className={Style.btncarrucelLentes}>Ver Detalle</button>
    <h3>{props.nombre}</h3>
    <p className={props.pDemas}>{props.descripcion}</p>
    <p className={props.pPrecio}>  ${props.precio}</p>
    </>
  )
}

export default CardContacto