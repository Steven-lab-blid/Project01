import { useState, useEffect } from "react";

function EjemploDependencia() {
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        console.log("El nombre cambio: ", nombre);
    }, [nombre]);
    return (
        <>
         <input value={nombre}
            onChange={e => setNombre(e.target.value)}
             placeholder="Escribe tu nombre"
         />
    </>
  );
}
export default EjemploDependencia