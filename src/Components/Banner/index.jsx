import { useVideoContext } from '@/hooks/useVideoContext';
import styles from './Banner.module.css';
import Tag from '@/Components/Tag';
import { useEffect, useState } from 'react';

const Banner = () => {
    const { videos } = useVideoContext();
    const [videoDestaque, setVideoDestaque] = useState([]);

    useEffect(() => {
        if (videos.length) {
            setVideoDestaque(videos.filter(video => video.categoria === 'genshin' && video.id === 2)[0]);
        }
    }, [videos]);

    const temVideo = videoDestaque.length != 0;
    return (
        <>
            {temVideo ? <section className={styles.banner} style={{ backgroundImage: `url(${videoDestaque.imagem})` }}>
                <div className={styles.infoVideo}>
                    <Tag texto="GENSHIN" estilo="back" />
                    <h1 className={styles.titulo}>A digníssima "Arconte Hydro" Furina!</h1>
                    <p className={styles.texto}>{videoDestaque.descricao}</p>
                </div>
                <div className={styles.videoBanner}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={videoDestaque.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
                : ''}
        </>
    );
};

export default Banner;