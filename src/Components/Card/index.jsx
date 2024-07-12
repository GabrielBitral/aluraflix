import Botao from '../Botao';
import styles from './Card.module.css';
import remover from './remover.png';
import editar from './editar.png';
import { VideoContext } from '@/Contexts/VideoContext';
import { useContext } from 'react';

const Card = ({ tag, video }) => {
    const { setVideoUpdate, setVideoRemover } = useContext(VideoContext);

    return (
        <div className={`${styles.card} ${tag === 'lol' ? styles.lol : tag === 'genshin' ? styles.genshin : styles.honkai}`}>
            <iframe
                    className={tag === 'lol' ? styles.lol : tag === 'genshin' ? styles.genshin : styles.honkai}
                    width="100%"
                    height="100%"
                    src={video.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className={`${styles.botoes} ${tag === 'lol' ? styles.lol : tag === 'genshin' ? styles.genshin : styles.honkai}`}>
                    <p className={styles.titulo}>{video.titulo}</p>
                    <Botao handleClick={() => setVideoUpdate(video)}><img src={editar} alt='Editar Vídeo' className={styles.icones} />EDITAR</Botao>
                    <Botao handleClick={() => setVideoRemover(video)}><img src={remover} alt='Remover Vídeo' className={styles.icones} />DELETAR</Botao>
                </div>
        </div>
    );
};

export default Card;