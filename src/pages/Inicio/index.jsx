import Banner from "components/Banner/Banner";
import Categoria from "components/Categoria/Categoria";
import { useEffect, useState } from "react";
import { useGlobalContext } from "context/GlobalContext";
import Loading from "components/Loading/Loading";
import styles from "./index.module.css";
import Modal from "components/Modal/Modal";
//import ListadoDeCategorias from "components/Datos/ListadoDeCategorias";
//import ListadoDeVideos from "components/Datos/ListadoDeVideos";


function Inicio(){
    // const [videos, setVideos] = useState([]);
    const { categorias, videos, delteVideo, updateVideo } = useGlobalContext();
    // const [categorias, setCategorias] = useState([]);
    const [bannerCard, setBannerCard] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    // const [categoryLookUp, setCategoryLookUp] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setCategorias(categoryData);
    // }, []);

    useEffect(() => {
        if (videos.length >0) {
            setBannerCard(videos[0]);
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [videos]);


    
    //mi código
    // useEffect( () => {
    //     fetch("https://my-json-server.typicode.com/soniaveit/alura-flix-api/videos")
    //     .then(response => response.json())
    //     .then(data => {
    //         setVideos(data);
    //     });
    // },[]);

    //mi código
    // useEffect( () => {
    //     fetch("https://my-json-server.typicode.com/soniaveit/alura-flix-api/categorias")
    //     .then(response => response.json())
    //     .then(data => {
    //         setCategorias(data);
    //     })
    // },[])    
    //mi código

    // useEffect(() => {
    //     const lookUp = {};
    //     categorias.forEach(categoria => {
    //         lookUp[categoria.nombre] = categoria
    //     });
    //     setCategoryLookUp(lookUp);
    // }, [categorias]);

    const handleCardClick = (card) => {
        setBannerCard(card);
        const bannerElement = document.getElementById("banner");
        if (bannerElement) {
            bannerElement.scrollIntoView( { behavior: "smooth"});
        }
    };

    const handleCardDelete = (cardId) => {
        delteVideo(cardId);
        if (bannerCard && bannerCard.id === cardId && videos.length > 0) {
            setBannerCard(videos[0]);  
        } else if (videos.length === 0) {
            setBannerCard(null);
        }
    };

    const handleCardEdit = (card) => {
        setCurrentCard(card)
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleModalSave = (updateCard) => {
        updateVideo(updateCard);
        setModalOpen(false);
    };



    return (
        isLoading ?
            <Loading/> :
            <div className={styles.home_container}>
                {/* {bannerCard && <Banner card={bannerCard} categoryLookUp/>} */}
                <Banner/>

                { categorias.map(categoria => (
                    <Categoria 
                        datos={categoria} 
                        key={categoria.id}
                        videos={ videos.filter(video => video.categoria === categoria.nombre && video.id !== 1)}
                        onCardClick={handleCardClick}
                        onCardDelete={handleCardDelete}
                        onCardEdit={handleCardEdit}
                    />
                ))}
        
            <Modal
                video={currentCard}
                isOpen={modalOpen}
                onClose={handleModalClose}
                onSave={handleModalSave}
            />
        
        </div>
    )
}

export default Inicio;