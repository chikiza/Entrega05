import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro"

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alingItems: 'center',
        height: '80px',
        color:'#0a283e',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px',
    }
}
class Navbar extends Component {
    render() {
        const { carro } = this.props
        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Carro carro={carro}/>
            </nav>
        )
    }
}

export default Navbar