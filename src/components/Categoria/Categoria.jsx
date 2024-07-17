import { useState } from "react";
import PropTypes from 'prop-types';
import Card from "components/Card/Card";
import styles from "./Categoria.module.css"
import Notificacion from 'components/Notificacion/Notificacion';
import ConfirmacionDialog from 'components/ConfirmacionDialog/ConfirmacionDialog';

const Categoria = ({datos, videos, onCardClick, onCardDelete, onCardEdit}) => {
    const {nombre,color} = datos;
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);
    const obj = {backgroundColor: color};
    
    const handleDelete = (cardId, cardTitle) => {
        setCardToDelete({ id: cardId, title: cardTitle });
        setShowConfirmation(true);
    };
    
    const confirmDelete = () => {
        if (cardToDelete) {
            onCardDelete(cardToDelete.id);
            setNotificationMessage(`"${cardToDelete.title}" eliminado correctamente.`);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                setNotificationMessage('');
            }, 3000);
            setShowConfirmation(false);
            setCardToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
        setCardToDelete(null);
    };

    return (
    <>
        {showNotification && <Notificacion message={notificationMessage} onClose={() => setShowNotification(false)} />}
        {showConfirmation && (
            <ConfirmacionDialog 
                message={`¿Estás seguro de que deseas eliminar "${cardToDelete?.title}" ?`}
                title={cardToDelete?.title}
                // primaryColor={primaryColor}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        )}

        {videos && videos.length > 0 && (
            <section className={styles.Categoria}>
                <div className={styles.contenedor}>
                    <h3 className={styles.nombreCategoria} style={obj} >{nombre}</h3>
            
                    <div className={styles.cardContenedor}>
                        {videos.map( (video) => (
                            <Card 
                                datos={video} 
                                key={video.id}
                                // primaryColor={primaryColor}
                                onClick={() => onCardClick(video)}
                                onDelete={() => handleDelete(video.id, video.titulo)}
                                onEdit={() => onCardEdit(video)}
                                // eliminarVideo={eliminarVideo}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )}
    </>
    );
};

Categoria.propTypes = {
    datos: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        primaryColor: PropTypes.string.isRequired,
    }).isRequired,
    video: PropTypes.arrayOf(
        PropTypes.shape({
            imgUrl: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            videoUrl: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    onCardClick: PropTypes.func.isRequired,
    onCardDelete: PropTypes.func.isRequired,
    onCardEdit: PropTypes.func.isRequired,
};


export default Categoria;