import styles from './Titulo.module.css';

const Titulo = ({ texto, cor }) => {
    return (
        <h1 className={cor === 'clara' ? styles.corClara : styles.corEscura }>{texto}</h1>
    );
};

export default Titulo;