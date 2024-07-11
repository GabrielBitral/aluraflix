import styles from './Campo.module.css';

const Campo = ({ valor, label, tipo = "text", placeholder, corBorda, aoTerDigitado }) => {
    const aoDigitar = (evento) => {
        aoTerDigitado(evento.target.value);
    };

    return (
        <div className={styles.campoLabelContainer}>
            <label className={styles.label}>{label}</label>
            <input 
                value={valor}
                className={`${styles.campo} ${corBorda === 'azul' ? styles.bordaAzul : ''}`} 
                type={tipo} 
                placeholder={placeholder} 
                onChange={aoDigitar}
            />
        </div>
    );
};

export default Campo;