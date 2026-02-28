import { useState } from "react";
import { ListaMusica } from "./ListaMusica";

const playlist = new ListaMusica();
playlist.agregarMusica("Song 1");
playlist.agregarMusica("Song 2");
playlist.agregarMusica("Song 3");

export default function Reproductor() {
    const [Actual, setActual] = useState(playlist.head);

    const siguiente = () => {
        if (Actual?.siguiente) 
            setActual(Actual.siguiente);
    };

    const anterior = () => {
        if (Actual?.anterior)
            setActual(Actual.anterior);
    };

    return (
        <div style={{ border: '1px solid white', padding: '15px' }}>
            <h1>🎵 Reproductor Musical</h1>
            
            <p>Reproduciendo: <strong>{Actual?.value || "Ninguna canción seleccionada"}</strong></p>
            <button 
            onClick={anterior}  disabled={!Actual?.anterior}>
                Anterior ⏮️
            </button>
            <button 
            onClick={siguiente}  disabled={!Actual?.siguiente}>
                Siguiente ⏭️
            </button>
        </div>
    );
}