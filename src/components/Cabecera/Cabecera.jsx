import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo_Alura.png";
import CabeceraLink from "../CabeceraLink/CabeceraLink";

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/>
                </section>
            </Link>
            <nav>
                <div className={styles.contenedorPaginas}>
                    <CabeceraLink url="/">
                        Home
                    </CabeceraLink>
                    <CabeceraLink url="/NuevoVideo">
                        Nuevo Video
                    </CabeceraLink>
                </div>
            </nav>
        </header>
    )
}

export default Cabecera;