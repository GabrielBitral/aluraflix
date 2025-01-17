import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '@/assets/logo.svg';

const Header = () => {
    return (
        <header className={styles.headerContainer}>
             <Link to='/' className={styles.logoLink}><img src={logo} alt='Logo AluraFlix' className={styles.logo} /></Link>
            <div className={styles.linkContainer}>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/novo-video'>Novo Vídeo</NavLink>
            </div>
        </header>
    );
};

export default Header;