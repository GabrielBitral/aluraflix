import { createContext, useEffect, useState } from "react";

export const VideoContext = createContext();
VideoContext.displayName = "Video";
const estadoInicial = [];

export const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState(estadoInicial);
    const [videoUpdate, setVideoUpdate] = useState(null);
    const categorias = [
        {
            valor: 'lol',
            texto: 'LOL'
        },
        {
            valor: 'genshin',
            texto: 'GENSHIN'
        },
        {
            valor: 'honkai',
            texto: 'HONKAI S. R.'
        },
    ];

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/GabrielBitral/aluraflix-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados);
            });
    }, [])

    return (
        <VideoContext.Provider value={{videos, setVideos, videoUpdate, setVideoUpdate, categorias}}>
            {children}
        </VideoContext.Provider>
    )
};