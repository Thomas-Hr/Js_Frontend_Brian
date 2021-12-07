/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
import React from "react";
import axios from "axios";
import './DetailStyle.css';
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/


const PersonaDetail = (props) => {


   const remove = (_id) => {
      axios.get(`http://localhost:3000/libros/delete/${_id}`)
        .then(function(response) {
          this.setState({
            filtered: response
          })
        }).catch(function(error) {
          console.log(error)
        })
    }



return(
   <div className="row cuerpo">
      <div className="col s12 m7 blue-grey darken-1">
         <div className="card">
            <div className="card-content teal lighten-3">
               <h4>Nombre: {props.detailLibroo.nombre} </h4>
               <p>Titulo: {props.detailLibroo.titulo} </p>
               <p>Autor: {props.detailLibroo.autor}</p>
               <p>Precion unitario: {props.detailLibroo.precio}</p>
               
            </div>
                  <div className="card-action blue-grey darken-4">
                     <a href="#!">Fecha:  {props.detailLibroo.fecha_registro}   Y   Id: {props.detailLibroo._id}</a>                 
                     <button type="submit" onClick={remove.bind(this, props.detailLibroo._id)} className="waves-effect waves-light btn" >x</button>
                  </div>
         </div>
      </div>
      
   </div>
  
          
)
}
/*---------------------------------------------------------------------------*/
export default PersonaDetail;
/*---------------------------------------------------------------------------*/