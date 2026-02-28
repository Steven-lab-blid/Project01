interface props {
    
    numero: number;

}

function PrintNumero({numero}: props) {
    return (<>
        <h3>{numero}</h3>
    </>);
}

export default PrintNumero;