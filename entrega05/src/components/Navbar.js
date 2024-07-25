import { Component } from "react";

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alingItems: 'center',
        color:'#0a283e',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px',
    }
}
class Navbar extends Component {
    render() {
        return(
            <nav style={styles.navbar}>
                <p>Logo</p>
                <p>Carro</p>
            </nav>
        )
    }
}

export default Navbar