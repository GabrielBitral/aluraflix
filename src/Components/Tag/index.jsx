import styles from './Tag.module.css';

const Tag = ({ texto, estilo }) => {
    return (
        <span className={
            estilo === 'back' ? styles.back :
                estilo === 'front' ? styles.front :
                    styles.mobile
        }
        >
            {texto}
        </span>
    );
};

export default Tag;