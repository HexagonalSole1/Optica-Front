import React from 'react'
import "./LenteCom2.css"
function LenteCom2(props) {
  return (
    
    <>
    
    <img src={props.urlLogo} alt={props.nombre} />
                <button className='btncarrucelLentes'>Ver Detalle</button>
                <h3>{props.nombre}</h3>
                <p className='pDemas'>{props.descripcion}</p>
                <p className='pPrecio'>  ${props.precio}</p>
             
    
    </>
               
  )
}

export default LenteCom2