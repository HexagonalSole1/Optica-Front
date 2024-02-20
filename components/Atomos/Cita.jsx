import Style from "./Cita.module.css";
import Image from 'next/image';


function Cita() {
    return (
  
  
      <div className={Style.divButton}>
        <Image
            src="/calendario.png"
            alt="Descripción del icono"
            width={48}
            height={48}
        />
        <b className={Style.p}>AGENDA TU CITA</b>
      </div>
    );
  }
  
  export default Cita;