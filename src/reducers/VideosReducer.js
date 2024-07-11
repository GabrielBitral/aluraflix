export const ADD_VIDEO = "ADD_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";

export const videosReducer = async (estado, acao) => {
    switch (acao.type) {
        case ADD_VIDEO:
            const novoVideo = acao.payload;
            const conexao = await fetch("http://localhost:3000/videos", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    categoria: novoVideo.categoria,
                    descricao: novoVideo.descricao,
                    link: novoVideo.link,
                    imagem: novoVideo.imagem
                })
            });

            if (!conexao.ok) {
                throw new Error("Não foi possível enviar o vídeo");
            }

            return [...estado, novoVideo];
        case REMOVE_VIDEO:
            const videoId = acao.payload;
            return estado.filter(video => video.id !== videoId);
        case UPDATE_VIDEO:
            const { id, videoInfos } = acao.payload;
            return estado.map((item) => item.id === id ? videoInfos : item);
        default:
            return estado;
    }
};