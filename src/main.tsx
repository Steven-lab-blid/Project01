import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './Ejercicios/HelloWorld';
import PrintMessage from './Ejercicios/PrintMessage';
import PrintNumero from './Ejercicios/PrintNumero';
import Contador from './Ejercicios/Contador';
import Arrays from './Ejercicios/Arrays';
import Arreglos from './Ejercicios/Arreglos';
import PrintValor from './Ejercicios/PrintValor';
import EjemploFunciones from './Ejercicios/EjemploFunciones';
import FormContact from './Challenge01/FormContact';
import ListaContact from './Challenge01/ListaContac';
import Navegador from './Challenge02/Navegador';
import Reproductor from './Challenge02/Reproductor';


export interface Contacto {
  nombre: string;
  telefono: string;
}

function App() {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContactos([
        { nombre: 'Steven', telefono: '123456789' },
        { nombre: 'Andrea', telefono: '987654321' },
      ]);
      setCargando(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const agregarContacto = (nombre: string, telefono: string) => {
    const nuevoContacto: Contacto = { nombre, telefono };
    setContactos([...contactos, nuevoContacto]);
  };

  const eliminarContacto = (nombre: string) => {
    setContactos(contactos.filter(contacto => contacto.nombre !== nombre));
  };

  if (cargando) {
    return (
      <div style={{ padding: '20px', margin: '20px' }}>
        <h1>Lista de contactos...⌛</h1>
      </div>
    );
  }
  return (
      <div style={{ padding: '20px', margin: '20px' }}>
        <h1>Contactos 📒</h1>
          <FormContact agregar={agregarContacto} />
        <hr />
          <ListaContact contactos={contactos} eliminar={eliminarContacto} />
      </div>
    );
  }

function App2() {
  const[view, setView] = useState<'Menu' | 'Musica' | 'Navegador'>('Menu');
  return (
    <div style={{ padding: '20px', margin: '20px' }}>
      <h1>Challenge</h1>
        <nav>
          <button onClick={() => setView('Musica')}>Challenge Música</button>
          <button onClick={() => setView('Navegador')}>Challenge Navegador</button>
      </nav>
      <hr />
      {view === 'Menu' && <p>Selecciona una opciónpara comenzar.</p>}
      
      {view === 'Musica' && (
        <>
          <h2>Challenge Música 🎵</h2>
          <Reproductor />
        </>
      )}

      {view === 'Navegador' && (
        <>
          <h2>Challenge Navegador 🌐</h2>
          <Navegador />
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
    <HelloWorld />
    <PrintMessage message="Como te va?" />
    <PrintMessage message="Soy un mensaje!!" />
    <PrintNumero numero={42} />
    <PrintValor numero={15} />
    <Contador />
    <Arrays />
    <Arreglos />
    <EjemploFunciones />
    <App />
    <App2 />
  </React.StrictMode>   
)
