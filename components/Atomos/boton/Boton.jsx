import React from 'react'
import "./Boton.css"
function boton(props) {
  return (
    <div className='divBoton'>
 <button className='btnbutton'>
        {props.titulo}

    </button>
    </div>
   
  )
}

export default boton