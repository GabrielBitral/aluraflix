import Banner from '@/Components/Banner';
import styles from './Home.module.css';
import Categorias from '../../Components/Categorias';
import Dialogo from '../../Components/Dialogo';
import { useVideoContext } from '../../hooks/useVideoContext';

const Home = () => {
    const { videos, videoUpdate, setVideoUpdate } = useVideoContext();
    
    return (
        <>
            <Banner />
            <section className={styles.categorias}>
                <Categorias />
            </section>
            {videoUpdate &&
                <Dialogo video={videoUpdate} aoFechar={() => setVideoUpdate(null)}/>
            }
        </>
    );
};

export default Home;