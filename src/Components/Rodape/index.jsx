import styles from './Rodape.module.css';
import logo from '@/assets/logo.svg';
import iconeHome from './home.png';
import iconeHomeAtivo from './home-active.png';
import iconeNovo from './novo.png';
import iconeNovoAtivo from './novo-active.png';
import { NavLink } from 'react-router-dom';

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img src={logo} alt='Logo AluraFlix' className={styles.logo} />
            <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/'>
                {({ isActive }) => (
                    <div className={styles.containerIcones}>
                        <img className={styles.icone} src={isActive ? iconeHomeAtivo : iconeHome} alt='Icone de casa' />
                        <span style={isActive ? {display: 'flex'} : {display: 'none'}}>HOME</span>
                    </div>
                )}
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/novo-video'>
                {({ isActive }) => (
                    <div className={styles.containerIcones}>
                        <img className={styles.icone} src={isActive ? iconeNovoAtivo : iconeNovo} alt='Icone de casa' />
                        <span style={isActive ? {display: 'block'} : {display: 'none'}}>NOVO VÍDEO</span>
                    </div>
                )}
            </NavLink>
        </footer>
    );
};

export default Rodape;