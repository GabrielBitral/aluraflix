import styles from './Botao.module.css';

const Botao = ({ children, handleClick }) => {
    return (
        <button className={styles.botao} onClick={handleClick}>{children}</button>
    );
};

export default Botao;