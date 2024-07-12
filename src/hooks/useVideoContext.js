import { useContext } from "react";
import { VideoContext } from '@/Contexts/VideoContext';

export const useVideoContext = () => {
    const { videos, setVideos, videoUpdate, setVideoUpdate, categorias } = useContext(VideoContext);

    function adicionarVideo(novoVideo) {
        
    }

    function removerVideo(id) {
       
    }

    function alterarVideo(videoId, videoAlterar) {
        
    }

    return {
        videos,
        videoUpdate,
        adicionarVideo,
        removerVideo,
        alterarVideo,
        setVideoUpdate,
        categorias
    };
};