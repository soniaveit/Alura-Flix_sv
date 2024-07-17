import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

const GlobalContext = createContext();


export const useGlobalContext = () => useContext(GlobalContext)


const GlobalContextProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const fetchVideos = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/soniaveit/alura-flix-api/videos");
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error("Error fetching videos: ", error);
        }
    };

    const fetchCategorias = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/soniaveit/alura-flix-api/categorias");
            const data = await response.json();
            setCategorias(data);
        } catch (error) {
            console.error("Error fetching videos: ", error);
        }
    };

    useEffect(() => {
        fetchCategorias();
    }, []);

    useEffect(() => {
        fetchVideos();
    }, []);

    const addVideo = (video) => {
        setVideos((prevVideos) => [...prevVideos, {...video, id: prevVideos.length + 1}]);
    };
    
    const updateVideo = (updateVideo) => {
        setVideos((prevVideos) => 
            prevVideos.map((video) => (video.id === updateVideo.id ? updateVideo : video))
        );
    };

    // const deleteVideo = (videoId) => {
    //     setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
    //     setVideos(newVid);
    // };

    const deleteVideo = (videoId) => {
        const newVid = videos.filter((video) => video.id !== videoId);
        
        setVideos(newVid);
      };
    
    return (
        <GlobalContext.Provider value={{ categorias, videos, addVideo, updateVideo, deleteVideo}}> 
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContextProvider;