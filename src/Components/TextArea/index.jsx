import styles from './TextArea.module.css';

const TextArea = ({ valor, label, placeholder, corBorda, aoTerDigitado }) => {
    const aoDigitar = (evento) => {
        aoTerDigitado(evento.target.value);
    };

    return (
        <div className={styles.textAreaLabelContainer}>
            <label className={styles.label}>{label}</label>
            <textarea 
                value={valor}
                className={`${styles.textArea} ${corBorda === 'azul' ? styles.bordaAzul : ''}`} 
                placeholder={placeholder} 
                onChange={aoDigitar}
            />
        </div>
    );
};

export default TextArea;