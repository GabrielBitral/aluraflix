import { useContext } from "react";
import { VideoContext } from '@/Contexts/VideoContext';
import { ADD_VIDEO, REMOVE_VIDEO, UPDATE_VIDEO } from "../reducers/VideosReducer";

const addVideoAction = (novoVideo) => ({
    type: ADD_VIDEO,
    payload: novoVideo
});

const removeVideoAction = (videoId) => ({
    type: REMOVE_VIDEO,
    payload: videoId,
});

const updateVideoAction = (videoId, videoInfos) => ({
    type: UPDATE_VIDEO,
    payload: { videoId, ...videoInfos },
});

export const useVideoContext = () => {
    const { videos, dispatch, videoUpdate, setVideoUpdate } = useContext(VideoContext);

    function adicionarVideo(novoVideo) {
        dispatch(addVideoAction(novoVideo));
    }

    function removerVideo(id) {
        dispatch(removeVideoAction(id));
    }

    function alterarVideo(videoId, videoAlterar) {
        dispatch(updateVideoAction(videoId, videoAlterar));
    }

    return {
        videos,
        videoUpdate,
        adicionarVideo,
        removerVideo,
        alterarVideo,
        setVideoUpdate,
    };
};