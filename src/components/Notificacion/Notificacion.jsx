import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Notificacion.module.css";
import { BsCheckCircle } from "react-icons/bs";

const Notificacion = ({ message, onClose, color }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`styles.notificacion ${show ? 'show' : ''}`} style={{ backgroundColor: color }}>
            <div className={styles.notificacion_content}>
                <div className={styles.notificacion_icons}>
                    <BsCheckCircle className={styles.notificacion_icon} />
                </div>
                <p>{message}</p>
                <button className={styles.close_button} onClick={handleClose}>X</button>
            </div>
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string
};

Notification.defaultProps = {
    color: 'var(--blanco)' 
};

export default Notificacion;