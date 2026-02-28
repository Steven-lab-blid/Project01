interface props {
    
    numero: number;

}

function PrintValor({numero}: props) {
    return (<>
        <h3>{numero}</h3>
    </>);
}

export default PrintValor;