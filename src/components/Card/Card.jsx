import { useContext } from "react";
import styles from "./Card.module.css"
import borrar from "./borrar.png"
import editar from "./editar.png"
import GlobalContextProvider from "../context/GlobalContext.jsx";

const Card = ({datos, primaryColor, onClick, onDelete, onEdit}) => {
    const {id, titulo, imgUrl }= datos
    const { deleteVideo } = useContext(GlobalContextProvider);
    
    const handleClick = () => {
        onClick();
        const bannerElement = document.getElementById("banner");
        if (bannerElement) {
            bannerElement.scrollIntoView({behavior: "smooth"});
        }
    };

     function eliminarVideo(id){
         console.log("Eliminar card id: ", id)
         deleteVideo.id=id;
     }

    return (
        <div className={styles.container}>
            <figure className={styles.figure}  key={id}>
                <img className={styles.capa} src={imgUrl} alt={titulo} onClick={{handleClick}} />
                <figcaption className={styles.figcaption} >
                    <div className={styles.icono} onClick={(e) => { e.stopPropagation(); onEdit(datos); }}>
                        <img className={styles.editar} src={editar} alt="Editar" />
                        <span className={styles.txtspan}>Editar</span>
                    </div>
                    <div className={styles.iconos} onClick={() => eliminarVideo(id)}>
                        <img className={styles.borrar} src={borrar} alt="Borrar"  />
                        <span className={styles.txtspan}>Borrar</span>
                    </div> 
                </figcaption>
            </figure>
        </div>
    )
}





export default Card;