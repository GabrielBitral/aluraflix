import styles from './Select.module.css';

const Select = ({ children, label, corBorda }) => {
    return (
        <div className={styles.selectLabelContainer}>
            <label className={styles.label}>{label}</label>
            <select className={`${styles.select} ${corBorda === 'azul' ? styles.bordaAzul : ''}`}>
                {children}
            </select>
        </div>
    );
};

export default Select;