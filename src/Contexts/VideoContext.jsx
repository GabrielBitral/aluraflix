import { createContext, useEffect, useReducer, useState } from "react";
import { videosReducer, SET_VIDEOS } from "../reducers/VideosReducer";

export const VideoContext = createContext();
VideoContext.displayName = "Video";
const estadoInicial = [];

export const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [videoUpdate, setVideoUpdate] = useState(null);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/GabrielBitral/aluraflix-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados);
            });
    }, [])

    return (
        <VideoContext.Provider value={{videos, videoUpdate, setVideoUpdate}}>
            {children}
        </VideoContext.Provider>
    )
};