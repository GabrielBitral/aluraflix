import styles from './Botao.module.css';

const Botao = ({ children, borda = '', handleClick }) => {
    return (
        <button
            className={borda === 'azul' ? styles.bordaAzul : borda === 'branca' ? styles.bordaBranca : styles.botao}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Botao;