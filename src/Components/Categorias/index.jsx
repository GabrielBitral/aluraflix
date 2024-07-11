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
                <Tag texto="LOL" estilo={'front'} />
                {videosLOL.map((video) =>
                    <Card tag={'front'} video={video} key={video.id} />
                )}
            </section>
            <section className={styles.categoria}>
                <Tag texto="GENSHIN" estilo={'back'} />
                {videosGenshin.map((video) =>
                    <Card tag={'back'} video={video} key={video.id} />
                )}
            </section>
            <section className={styles.categoria}>
                <Tag texto="HONKAI S. R." estilo={'mobile'} />
                {videosHonkai.map((video) =>
                    <Card tag={'mobile'} video={video} key={video.id} />
                )}
            </section>
        </>
    );
};

export default Categorias;