import styles from './Tag.module.css';

const Tag = ({ texto, estilo }) => {
    return (
        <span className={
            estilo === 'lol' ? styles.lol :
                estilo === 'genshin' ? styles.genshin :
                    styles.honkai
        }
        >
            {texto}
        </span>
    );
};

export default Tag;