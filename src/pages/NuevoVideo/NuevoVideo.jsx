import CampoTexto from "components/CampoTexto/CampoTexto";
import styles from "./NuevoVideo.module.css"
import CampoTextArea from "components/CampoTextArea/CampoTextArea";
import ListaOpciones from "components/ListaOpciones/ListaOpciones";
import { useState } from "react";
import Boton from "components/Boton/Boton";
//import { useSubmit } from "react-router-dom";

function NuevoVideo(props) {

    const[categoria,actualizarCategoria]=useState("")

    return(
        <div className={styles.paginaNuevoVideo}>
            <header className={styles.headerNuevoVideo}>
                <h1 className={styles.tituloPagina}> NUEVO VIDEO</h1>
                <p className={styles.leyenda}>
                    COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
                </p>
                <h2 className={styles.nuevoVideo_titulo_seccion}>Crear Tarjeta</h2>
            </header>

            <form className={styles.formulario_nuevoVideo}>

                <div className={styles.seccion}>
                    <div className={styles.seccion_izq}>

                        <CampoTexto
                            className={styles.nuevoVideo_input}
                            titulo="Título" 
                            placeholder="Ingrese el título del video" 
                            required 
                            //valor={nombre}
                            //actualizarValor={actualizarNombre}
                        />

                        <CampoTexto
                            titulo="Imagen" 
                            placeholder="Ingrese la URL de la imagen" 
                            required 
                            //valor={nombre}
                            //actualizarValor={actualizarNombre}
                        />

                        <CampoTextArea 
                            titulo="Descripción" 
                            placeholder="¿De qué se trata este video?" 
                            required 
                            className={styles.nuevoVideo_descripcion}
                            //valor={nombre}
                            //actualizarValor={actualizarNombre}
                        />

                        {/* <label className={styles.nuevoVideo_label}>
                            Título:
                            <input className={styles.nuevoVideo_input}
                                type="text"
                                placeholder="Ingrese el título del video"
                                name="titulo"
                                value={FormData.tituo}
                                // onChange={handleChange}
                                maxLength="200"
                                required
                            />

                        </label> */}
                    </div>

                    <div className={styles.seccion_der}>
                        {/* <CampoTexto
                            titulo="Categoría (option List)" 
                            placeholder="Seleccione una categoría" 
                            required 
                            //valor={nombre}
                            //actualizarValor={actualizarNombre}
                        /> */}

                        <ListaOpciones
                            valor={categoria}
                            actualizarEquipo={actualizarCategoria}
                            categorias={props.categorias}
                        />

                        <CampoTexto
                            titulo="Video" 
                            placeholder="Ingrese la URL del Video" 
                            required 
                            //valor={nombre}
                            //actualizarValor={actualizarNombre}
                        />
                    </div>
                </div>

                <div className={styles.seccion_botones}>
                    <button 
                        className={styles.boton_Guardar} 
                        type="submit" 
                        //onclick={onClick}
                        >
                        Guardar
                    </button>

                    <button 
                        className={styles.boton_Limpiar} 
                        type="submit" 
                        //onclick={onClick}
                        >
                        Limpiar
                    </button>
                        
                        <Boton
                            type="submit"
                            textoBoton="GUARDAR"
                            //disabled={isButtonDisabled}
                            tipoBoton="form-button--save"
                        />
                        <Boton
                            type="button"
                            textoBoton="LIMPIAR"
                            //onClick={handleCancel}
                            tipoBoton="form-button--cancel"
                        />
                </div>
            </form>

            

        </div>
    )
}

export default NuevoVideo;