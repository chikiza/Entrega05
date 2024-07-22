
import { Component } from "react"
import Productos from './components/Productos'


class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpeg'},
      {name: 'Arvejas', price: 2500, img: '/productos/arbejas.jpeg'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpeg'},
    ]
  }
  render() {
    return (
      <div>
      <Productos 
      agregarAlCarro={() => console.log('no hace nada')}
      productos={this.state.productos}
      ></Productos>
    </div>
    )
  }
}

export default App;
