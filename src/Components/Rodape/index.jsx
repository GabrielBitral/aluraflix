import styles from './Rodape.module.css';
import logo from '@/assets/logo.svg';

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img src={logo} alt='Logo AluraFlix' className={styles.logo} />
        </footer>
    );
};

export default Rodape;