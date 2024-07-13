import { createContext, useState } from "react";

export const linkApi = 'https://aluraflix-api-gb.vercel.app/videos';
export const VideoContext = createContext();
VideoContext.displayName = "Video";
const estadoInicial = [];

export const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState(estadoInicial);
    const [videoUpdate, setVideoUpdate] = useState(null);
    const [videoRemover, setVideoRemover] = useState(null);

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

    return (
        <VideoContext.Provider
            value={
                { videos, setVideos, videoUpdate, setVideoUpdate, videoRemover, setVideoRemover, categorias }
            }
        >
            {children}
        </VideoContext.Provider>
    )
};