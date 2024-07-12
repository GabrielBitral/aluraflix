import Banner from '@/Components/Banner';
import styles from './Home.module.css';
import Categorias from '@/Components/Categorias';
import Dialogo from '@/Components/Dialogo';
import { useVideoContext } from '@/hooks/useVideoContext';
import { useContext, useEffect } from 'react';
import { VideoContext } from '@/Contexts/VideoContext';
import DialogoRemover from '@/Components/DialogoRemover';
import { linkApi } from '@/Contexts/VideoContext';

const Home = () => {
    const { videos } = useVideoContext();
    const { setVideos, videoUpdate, setVideoUpdate, videoRemover, setVideoRemover } = useContext(VideoContext);

    useEffect(() => {
        fetch(linkApi)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados);
            });
    }, [videoRemover, videoUpdate])
    
    return (
        <>
            <Banner />
            <section className={styles.categorias}>
                <Categorias />
            </section>
            {videoUpdate &&
                <Dialogo video={videoUpdate} aoFechar={() => setVideoUpdate(null)}/>
            }
            {videoRemover &&
                <DialogoRemover video={videoRemover} aoFechar={() => setVideoRemover(null)}/>
            }
        </>
    );
};

export default Home;