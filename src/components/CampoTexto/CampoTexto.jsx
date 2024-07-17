import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const [valor,actualizarValor]=useState("")
    // console.log("Datos: ", props);
    const placeHolderModificado=`${props.placeholder}...`;

    //Destructuracion
    // type="text" hace que por defecto type sea del tipo texto, salvo que en props venga algo diferente
    //...antes eran todos indefinidos, salvo el de tipo "color"
    const { type="text" } = props
    //console.log(type)
    
    const manejarCambio= (e)=>{
        console.log("cambio",e)
        props.actualizarValor(e.target.value)
    }
    
    //{`campo campo-${type}`} ---> es para que le agregue al className "campo-el tipo de campo"
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeHolderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default CampoTexto;