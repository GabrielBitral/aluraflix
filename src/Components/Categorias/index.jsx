import Card from '../Card';
import Tag from '../Tag';
import styles from './Categoria.module.css';
import { useVideoContext } from '../../hooks/useVideoContext';

const Categorias = () => {
    const { videos } = useVideoContext();

    const videosLOL = videos.filter((video) => video.categoria === 'lol');
    const videosGenshin = videos.filter((video) => video.categoria === 'genshin');
    const videosHonkai = videos.filter((video) => video.categoria === 'honkai');

    return (
        <>
            <section className={styles.categoria}>
                <Tag texto="LOL" estilo={'lol'} />
                <div className={styles.cards}>
                    {videosLOL.map((video) =>
                        <Card tag={'lol'} video={video} key={video.id} />
                    )}
                </div>
            </section>
            <section className={styles.categoria}>
                <Tag texto="GENSHIN" estilo={'genshin'} />
                <div className={styles.cards}>
                    {videosGenshin.map((video) =>
                        <Card tag={'genshin'} video={video} key={video.id} />
                    )}
                </div>
            </section>
            <section className={styles.categoria}>
                <Tag texto="HONKAI S. R." estilo={'honkai'} />
                <div className={styles.cards}>
                    {videosHonkai.map((video) =>
                        <Card tag={'honkai'} video={video} key={video.id} />
                    )}
                </div>
            </section>
        </>
    );
};

export default Categorias;