import { Link, NavLink } from "react-router-dom";
import styles from "./CabeceraLink.module.css"

function CabeceraLink({url, children}){
    return(
        <NavLink to={url} className={styles.link}>
            {children}
        </NavLink>
    )
}

export default CabeceraLink;