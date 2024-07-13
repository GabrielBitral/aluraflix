import styles from './Banner.module.css';
import Tag from '@/Components/Tag';

const Banner = () => {
    return (
        <section className={styles.banner} style={{ backgroundImage: `url(https://fastcdn.hoyoverse.com/content-v2/hk4e/113484/1a0e331a984e482f84433eac47cd5e3b_1217371561545932985.jpg)` }}>
            <div className={styles.infoVideo}>
                <Tag texto="GENSHIN" estilo="genshin" />
                <h1 className={styles.titulo}>Furina, a 'Arconte' da nação Hydro!</h1>
                <p className={styles.texto}>Demonstração da personagem Furina, em uma atuação magnífica com seus mascotes e amigos!</p>
            </div>
            <div className={styles.videoBanner}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/EN79SfbcvIE?si=gf8zoy_I-z1MKo0r"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default Banner;