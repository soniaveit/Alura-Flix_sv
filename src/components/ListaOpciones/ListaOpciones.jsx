//import { useState } from "react";
import "./ListaOpciones.css"
//import { buscar } from "api/api";
import ListadoDeCategorias from "components/Datos/ListadoDeCategorias";



const ListaOpciones = (props) => {

     const manejarCambio = (e) => {
         console.log("cambio",e.target.value)
         props.actualizarCategoria(e.target.value)
     }


    // const [categorias, setCategorias] = useState([]);

    //  useEffect(() => {
    //       buscar(`/categorias`, setCategorias)
    //       console.log(categorias)
    //   }, [categorias])

     return <div className="lista-opciones">
         <label>Categorías</label>
         <select className="optionList" value={""} onChange={manejarCambio}>
             <option className="opcion" value="" disabled defaultValue="" hidden>Seleccione una categoría</option>
             {/* {categorias.map((categoria, id)=> <option key={id} value={categoria}>{categoria}</option>)} */}
             {/* {
                categorias.map((categoria, id) => (
                    <option key={id} value={categoria.nombre}>{categoria.nombre}</option>
                ))
             } */}
             {ListadoDeCategorias.map((categoria, id)=> <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option>)}
         </select>
     </div>

 }

export default ListaOpciones;