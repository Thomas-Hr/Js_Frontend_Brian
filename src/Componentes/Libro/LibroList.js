/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
import React from "react";

/*---------------------------------------------------------------------------*/
const PersonaList = ( props ) => {
      return(    
      <ul className="collection with-header">
        <li className="collection-header  teal lighten-1"><h4>Listado de libros:</h4></li>
         {
            props.list.map( (item)=>{
               return(
                  <li className="collection-header blue-grey darken-3">
                     <a href="#!"
                        key= { item._id }
                           onClick = { props.updateLibro.bind(this, item) }
                     >
                        { item.nombre  }
                     </a>
                   </li>
               )
            })
         }
      </ul>
         
      )
}
/*---------------------------------------------------------------------------*/
export default PersonaList;

/*---------------------------------------------------------------------------*/