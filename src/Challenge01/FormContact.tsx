import { useState } from "react";

interface FormContactProps {agregar: (n: string, t: string) => void;}

export default function FormContact({agregar}: FormContactProps) {
    const [Nombre, setNombre] = useState('');
    const [Telefono, setTelefono] = useState('');

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        agregar(Nombre, Telefono);
        setNombre('');
        setTelefono('');
    };

    return (
        <form onSubmit={enviar}>
            <input placeholder = "Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
            <input placeholder = "Telefono" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
            <button type="submit">Guardar</button>
        </form>
    );
}