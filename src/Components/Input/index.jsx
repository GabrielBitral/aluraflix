import styles from './Input.module.css';

const Input = ({ tipo="text" }) => {
    return (
        <input type={tipo} />
    );
};

export default Input;