interface props {
    
    message: string;

}

function PrintMessage({message}: props) {
    return (<>
        <h3>{message}</h3>
    </>);
}

export default PrintMessage;
