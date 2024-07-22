import { Component } from "react";

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.5)'
    }
}

class Producto extends Component {
    render() {
        const { producto } = this.props
        return (
            <div style={styles.producto}>
                <img alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        )
    }
}

export default Producto;

