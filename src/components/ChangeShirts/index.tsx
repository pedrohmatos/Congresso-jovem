import styles from './ChangeShirts.module.css';

type ChangeShirtsType = {
    children: string;
    onChangeShirt: () => void;
    active: boolean;
}

function ChangeShirts({children, onChangeShirt, active}: ChangeShirtsType) {
    return (
        <button type='button' className={`${styles['tshirt-caption']} ${active ? styles.active : ''}`} onClick={onChangeShirt}>
            {children}
        </button>
    )
}

export default ChangeShirts;