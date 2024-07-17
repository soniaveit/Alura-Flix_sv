import PropTypes from 'prop-types';
import styles from "./ConfirmacionDialog.css";

const ConfirmacionDialog = ({ message, primaryColor, onConfirm, onCancel }) => {
    return (
        <div className={styles.confirmacion_dialog}>
            <p className={styles.confirmacion_dialog_message}>
                {message} <span className={styles.confirmacion_dialog_titulo} style={{ color: "var(--blanco)" }}></span>
            </p>
            <button className={styles.confirmacion_yes} onClick={onConfirm}>Sí</button>
            <button className={styles.confirmacion_no} onClick={onCancel}>No</button>
        </div>
    );
};

ConfirmacionDialog.propTypes = {
    message: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default ConfirmacionDialog;
