import { useMemo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { IoMdCloseCircleOutline} from "react-icons/io";
import Boton from "components/Boton/Boton";
import { validateForm } from "components/Utilidades/ValidateForm";
import ConfirmacionDialog from "components/ConfirmacionDialog/ConfirmacionDialog";
import ListaOpc2 from "components/ListaOpciones/ListaOpc2/ListaOpc2";
import { useGlobalContext } from "context/GlobalContext";


const Modal=({card, isOpen, onClose, onSave}) => {
    const initialFormData = useMemo(() => ({
        titulo: "",
        categoria:"",
        imagenUrl:"",
        videoUrl:"",
        descripcion: ""
    }), []);

    const { categorias } = useGlobalContext();
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const descriptionRef = useRef(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        if (isOpen && card) {
            setFormData({ ...card});
        } else {
            setErrors({});
        }
    }, [card, isOpen, initialFormData]);

    useEffect(() => {
        const validate = async () => {
            const formErrors = await validateForm(formData);
            setErrors(formErrors);
            setIsButtonDisabled(Object.keys(formErrors).length > 0);
        };
        validate();
    }, [formData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value.toString()});
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formErrors = await validateForm(formData);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            setShowConfirmation(true);
        }
    };

    const handleConfirmSave = () => {
        onSave(formData);
        setShowConfirmation(false);
    };

    const handleCancelSave = () => {
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrors({});
        setIsButtonDisabled(true);
    };

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <IoMdCloseCircleOutline className={styles.close_icon} onClick={onClose}/>
                <h1>EDITAR CAR</h1>
                <form className={styles.modal_form} onSubmit={handleSave}>
                    <label> Título:
                        <input
                        className={`styles.modal_form_input ${errors.title ? 'error' : ''}`}
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        maxLength="200"
                        required
                    />
                    {<errors className="titulo"></errors> && <span className="error_message">{errors.titulo}</span>}
                </label>
                <ListaOpc2
                    clase={`modal_form_input modal_form_option ${errors.imagenUrl ? 'error' : ''}`}
                    clase2='dropdown_option'
                    value={formData.categoria}
                    onChange={(e) => handleChange({ target: { name: 'category', value: e.target.value } })}
                    options={categorias}
                />
                {errors.categoria && <span className="error_message">{errors.categoria}</span>}
                <label>Imagen:
                    <input
                        className={`modal_form_input ${errors.imagenUrl ? 'error' : ''}`}
                        type="url"
                        name="imagenUrl"
                        value={formData.imagenUrl}
                        onChange={handleChange}
                        maxLength="200"
                        required
                    />
                    {errors.imagenUrl && <span className="error_message">{errors.imagenUrl}</span>}
                </label>
                <label>Video:
                    <input
                        className={`modal_form_input ${errors.videoUrl ? 'error' : ''}`}
                        type="url"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleChange}
                        maxLength="200"
                        required
                    />
                    {errors.videoUrl && <span className="error_message">{errors.videoUrl}</span>}
                </label>
                <label>Descripción:
                    <textarea
                        className={`modal_form_input modal_form_textarea ${errors.descripcion ? 'error' : ''}`}
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        ref={descriptionRef}
                        rows="1"
                        maxLength="500"
                        required
                    />
                    {errors.descripcion && <span className="error_message">{errors.descripcion}</span>}
                </label>
                <div className="new_video__form_buttons">
                    <Boton
                        type="submit"
                        label="GUARDAR"
                        disabled={isButtonDisabled}
                        buttonType="form-button--save"
                    />
                    <Boton
                        type="button"
                        label="LIMPIAR"
                        onClick={handleCancel}
                        buttonType="form-button--cancel"
                    />
                </div>
            </form>
        </div>
        {showConfirmation && (
            <ConfirmacionDialog
                message={`¿Estás seguro de que deseas guardar los cambios?`}
                onConfirm={handleConfirmSave}
                onCancel={handleCancelSave}
            />
        )}
    </div>
);
};

Modal.propTypes = {
    card: PropTypes.object,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default Modal;