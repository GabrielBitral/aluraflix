import styles from './Select.module.css';

const Select = ({ valor, children, label, corBorda, aoSelecionado }) => {
    const aoSelecionar = (evento) => {
        aoSelecionado(evento.target.value);
    }

    return (
        <div className={styles.selectLabelContainer}>
            <label className={styles.label}>{label}</label>
            <select value={valor} className={`${styles.select} ${corBorda === 'azul' ? styles.bordaAzul : ''}`} onChange={aoSelecionar}>
                <option value=''>Selecione uma opção</option>
                {children}
            </select>
        </div>
    );
};

export default Select;