import Botao from '../Botao';
import styles from './Dialogo.module.css';
import fechar from './fechar.png';

const Dialogo = ({ video, aoFechar }) => {
    return (
        <>
            {video &&
                <>
                    <div className={styles.overlay} />
                    <dialog open={!!video} onClose={aoFechar}>
                        <form method="dialog">
                            <Botao formMethod="dialog">
                                <img src={fechar} alt="Icone de fechar" />
                            </Botao>
                        </form>
                    </dialog>
                </>
            }
        </>
    );
};

export default Dialogo;