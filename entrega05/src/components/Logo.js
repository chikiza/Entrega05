import { Component } from "react";

const styles = {
    logo: {
        fontWeiht: '900px',
        fontSize: '2rem',
    }
}
class Logo extends Component {
    render() {
        return(
            <div style={styles.logo}>
                Shop
            </div>
        )
    }
}

export default Logo