import { type Contacto } from '../main';

interface Props {
    contactos: Contacto[];
    eliminar: (n: string) => void;
}

export default function ListaContact({contactos, eliminar}: Props) {
    return (
        <ul>
            {contactos.map(item => (
                <li key={item.nombre}>
                    {item.nombre} - {item.telefono}
                    <button onClick={() => eliminar(item.nombre)}>Eliminar</button> 
                </li>
            ))}
        </ul>
    );
}
