import { useState } from "react";
import { ListaMusica } from "./ListaMusica";

const playlist = new ListaMusica();
playlist.agregarMusica("Song 1");
playlist.agregarMusica("Song 2");
playlist.agregarMusica("Song 3");

export default function MusicPlay() {
    const [currentSong, setCurrentSong] = useState(playlist.head);

    const playNext = () => {
        if (currentSong?.siguiente)
            setCurrentSong(currentSong.siguiente);
            else {
                alert("Fin de la playlist.");
            };

            return (
                <div>
                    <h1>Reproduciendo: {currentSong?.value}</h1>
                    <button onClick={playNext}>Siguiente</button>
                </div>
            );
        }
    };