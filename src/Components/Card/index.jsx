import Botao from '../Botao';
import styles from './Card.module.css';
import remover from './remover.png';
import editar from './editar.png';
import { useVideoContext } from '../../hooks/useVideoContext';

const Card = ({ tag, video }) => {
    const { alterarVideo, setVideoUpdate } = useVideoContext();

    return (
        <div className={`${styles.card} ${tag === 'back' ? styles.back : tag === 'front' ? styles.front : styles.mobile}`}>
            <iframe
                    className={tag === 'back' ? styles.back : tag === 'front' ? styles.front : styles.mobile}
                    width="100%"
                    height="100%"
                    src={video.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className={`${styles.botoes} ${tag === 'back' ? styles.back : tag === 'front' ? styles.front : styles.mobile}`}>
                    <Botao><img src={remover} alt='Remover Vídeo' />DELETAR</Botao>
                    <Botao handleClick={() => setVideoUpdate(video)}><img src={editar} alt='Editar Vídeo' />EDITAR</Botao>
                </div>
        </div>
    );
};

export default Card;