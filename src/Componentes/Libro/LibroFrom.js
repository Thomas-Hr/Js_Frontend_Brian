
import React ,{Component} from "react";
import axios from "axios";
import './FormStyle.css';
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
class PersonaForm extends Component{
    
    constructor (props){
        super(props);
        this.state={}
    }

    submitNuevaPersona(event){
      event.preventDefault()
      axios.post('http://localhost:3000/libros', {
            nombre: this.refs.nombre.value,
            titulo: this.refs.titulo.value,
            autor: this.refs.autor.value,
            precio: this.refs.precio.value,

      }).then( (respuesta) => { console.log(respuesta) } )
          .catch( error => console.log( error )  )
    }

    render(){
        return(
<div className="row formulario">
  

    <form className="col m6 m-a " onSubmit={this.submitNuevaPersona.bind(this)}>
    <h5 className="center">Agregar un nuevo libro</h5>
    

      <div className="row">
        <div className="input-field col s6">
          <input id="nombre" ref="nombre" placeholder="Nombre del libro" />
        </div>
        <div className="input-field col s6">
          <input id="tipo" ref="titulo" placeholder="Tipo de libro"/>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input id="empresa" ref="autor" placeholder="quien escribio el libro?"/>
        </div>
        <div className="input-field col s6">
          <input id="plataforma" ref="precio" placeholder="valor del libro"  />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s2">
          <button name="action"type="submit" className="waves-effect waves-light btn">Registrar</button>
        </div>
      </div>

    </form>


  

  </div>
        )
    }

}
/*---------------------------------------------------------------------------*/
export default PersonaForm;
/*---------------------------------------------------------------------------*/
