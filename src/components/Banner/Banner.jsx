import styles from "./Banner.module.css"
import banner from "./bannerMain.png"
import imgVideo from "./player.png"

function Banner(){
    let resumen ="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.";

    return(
        <div>
            <main id="banner" className={styles.capa} style={{ backgroundImage: `url(${banner})` }}>
                <div className={styles.gradiente}>
                    <section className={styles.contenido}>
                        <h1 className={styles.frontend}>FRONT END</h1>
                        <h2 className={styles.titulo}>Challenge React</h2>
                        <p className={styles.resumen}> {resumen} </p>
                    </section>

                    <section className={styles.contenidoVideo}>
                    
                       <img className={styles.imgVideo} src={imgVideo} alt="Player"></img>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Banner;