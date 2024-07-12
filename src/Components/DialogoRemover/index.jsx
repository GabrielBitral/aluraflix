import Botao from '../Botao';
import Titulo from '../Titulo';
import styles from './DialogoRemover.module.css';
import fechar from './fechar.png';
import { useVideoContext } from '@/hooks/useVideoContext';

const DialogoRemover = ({ video, aoFechar }) => {
    const { removerVideo } = useVideoContext();

    const aoDeletarVideo = (evento) => {
        evento.preventDefault();
        removerVideo(video.id);
    };

    return (
        <>
            {video &&
                <>
                    <div className={styles.overlay} />
                    <dialog open={!!video} onClose={aoFechar}>
                        <div className={styles.containerDialogo}>
                            <form method="dialog" className={styles.fechar}>
                                <Botao formMethod="dialog">
                                    <img src={fechar} alt="Icone de fechar" />
                                </Botao>
                            </form>
                            <Titulo texto="REMOVER VÍDEO" cor="escura" />
                            <form method='DELETE' className={styles.formulario}>
                                <h2 className={styles.subtitulo}>TEM CERTEZA QUE DESEJA EXCLUIR?</h2>
                                <div className={styles.botoes}>
                                    <Botao handleClick={aoDeletarVideo} borda='azul'>CONFIRMAR</Botao>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </>
            }
        </>
    );
};

export default DialogoRemover;