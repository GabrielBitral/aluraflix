import Botao from '../Botao';
import styles from './Card.module.css';
import remover from './remover.png';
import editar from './editar.png';
import { useVideoContext } from '../../hooks/useVideoContext';

const Card = ({ tag, video }) => {
    const { alterarVideo, setVideoUpdate } = useVideoContext();

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
                    <Botao><img src={remover} alt='Remover Vídeo' className={styles.icones} />DELETAR</Botao>
                    <Botao handleClick={() => setVideoUpdate(video)}><img src={editar} alt='Editar Vídeo' className={styles.icones} />EDITAR</Botao>
                </div>
        </div>
    );
};

export default Card;