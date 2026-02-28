import { useState } from "react";
import { ListaNavegacion } from "./ListaMusica";

const historial = new ListaNavegacion();
historial.agregarNavegacion("https://www.google.com");
historial.agregarNavegacion("https://www.facebook.com");
historial.agregarNavegacion("https://www.twitter.com");

export default function Navegador() {
    const [currentPage, setCurrentPage] = useState(historial.head);

    return (
        <div>
            <h2>URL Actual: {currentPage?.value}</h2>   
            <button onClick={() => {
                if (currentPage?.siguiente) setCurrentPage(currentPage.siguiente);
                else alert("No hay más páginas adelante.");
            }}>Siguiente 🔜</button>
            <button onClick={() => {
                if (currentPage?.anterior) setCurrentPage(currentPage.anterior);
                else alert("No hay más páginas atrás.");
            }}>Anterior 🔙</button>
        </div>
    );
}