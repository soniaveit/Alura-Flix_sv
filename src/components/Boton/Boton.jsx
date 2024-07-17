import "./Boton.css"

const Boton = ({type, textoBoton, onClick, disabled, tipoBoton}) => {
    // <div class="botones">
    <button 
        className={`boton_formulario ${tipoBoton}`} 
        type={type} 
        onclick={onClick}
        disabled={disabled}>
        {textoBoton}
    </button>
            
        //</div>
}


export default Boton;