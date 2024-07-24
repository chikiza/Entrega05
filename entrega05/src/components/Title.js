import { Component } from "react";

const styles = {
    title: {
        backgroundColor:'#0a283e',
        color: '#fff',
        marginBottom: '30px',
    }
}
class Title extends Component {
    render() {
        return(
            <h1 style={styles.title}>La Tiendita Magica</h1>
        )
    }
}

export default Title