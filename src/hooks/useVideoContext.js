import { useContext } from "react";
import { VideoContext } from '@/Contexts/VideoContext';
import { linkApi } from "../Contexts/VideoContext";

export const useVideoContext = () => {
    const { videos, setVideos } = useContext(VideoContext);

    async function adicionarVideo(novoVideo) {
        fetch(linkApi, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                ...novoVideo
            }),
        })
        .then(() => {
            setVideos([...videos])
            alert("Vídeo cadastrado!");
        })
        .catch(() => {
            alert("Nâo foi possível cadastrar o vídeo.");
        });
    }

    async function removerVideo(id) {
        fetch(`${linkApi}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
        })
        .then(() => {
            alert("Vídeo excluído!");
        })
        .catch(() => {
            alert("Nâo foi possível remover o vídeo.");
        });
    }

    function alterarVideo(videoId, videoAlterar) {
        fetch(`${linkApi}/${videoId}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                ...videoAlterar
            }),
        })
        .then(() => {
            alert("Vídeo alterado!");
        })
        .catch(() => {
            alert("Nâo foi possível editar o vídeo.");
        });
    }

    return {
        videos,
        adicionarVideo,
        removerVideo,
        alterarVideo,
    };
};