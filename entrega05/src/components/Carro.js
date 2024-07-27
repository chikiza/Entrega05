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
        const { carro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 
                    ?<BubbleAlert value= {cantidad}/> : null} 
                </span>
                <button style={styles.carro}>Carro</button>
                <DetalleCarro carro={carro}/>
            </div>
        )
    }
}

export default Carro