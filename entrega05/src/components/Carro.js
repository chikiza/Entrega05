import { Component } from "react";
import BubbleAlert from "./BubbleAlert"
import DetalleCarro from "./DetalleCarro"


const styles = {
    carro: {
        backgroundColor:'#359a2c',
        color: '#fff',
        cursor:'pointer',
        border: 'none',
        padding: '15px',
        borderRadius: '10px',
        },
    bubble: {
        position: 'relative',
        left: '75px',
        top: '-12px',
    } 
}
class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 
                    ?<BubbleAlert value= {cantidad}/> : null} 
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>Carro</button>
                {esCarroVisible ? <DetalleCarro carro={carro}/>
                : null}
                
            </div>
        )
    }
}

export default Carro