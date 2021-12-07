/*---------------------------------------------------------------------------*/
/*estilos*/
import './App.css';
/*---------------------------------------------------------------------------*/
/*dependencias de los componentes*/
import React, {Component} from 'react';
import axios from 'axios';
import PersonaList from './Libro/LibroList';
import PersonaDetail from './Libro/LibroDetail';
import PersonaForm from './Libro/LibroFrom';
/*---------------------------------------------------------------------------*/
/*Refactorar*/
class App extends Component {

  constructor(props){
    super(props);
  /*Los componentes que se van a trabajar*/
    this.state ={
      libros: [],
      librosActual: {},
    }
  /*vincular la funcion de actualizar el componente*/
    this.actualizarlibrosActual = this.actualizarlibrosActual.bind(this)
  }
  /*Llamar a la API Rest*/
  componentDidMount(){
    const url = "http://localhost:3000/libros"
    axios.get(url)
          .then((respuesta) => { this.setState ({ libros: respuesta.data })
            console.log(respuesta.data)
          })
          .catch((error) => { console.log ( error ) })
  }

  /*Funcion para saber el estado de la persona actual (Detalle)*/
  actualizarlibrosActual(libros){
      //Actualizar el estado:
      this.setState({
        librosActual: libros
      })
  }

  /*Renderizar la estructura HTML que viene del return*/
  render(){
    return (
      <div className="container-fluid">
          <div className="row abs">
              <div className="col s12">
                <nav>
                  <div className="nav-wrapper teal lighten-1">
                    <a href="#!" className="brand-logo right">Biblioteca!</a>
                  </div>
                </nav>
              </div>
          </div>
          <div className="abs">
              {/* Se llama al objeto persona donde se van a mostrar */}
              <div className="col s12"><PersonaForm /></div>
          </div>
          <div className="row abs2">
              {/* Se llama al objeto persona donde se van a mostrar */}
              <div className="col s3" >
                  <PersonaList 
                    list={ this.state.libros } 
                      updateLibro={ this.actualizarlibrosActual }
                    />
              </div>
              {/* Se llama al objeto persona donde se van a mostrar los seleccionados*/}
              <div className="col s9 abs">
                  <PersonaDetail
                    detailLibroo={ this.state.librosActual }
                  />
              </div>
          </div>
  
          
      </div>
    );
  }

}
/*---------------------------------------------------------------------------*/
/*Exportación*/
export default App;
/*---------------------------------------------------------------------------*/
