import "./ChangeShirts.css";

type ChangeShirtsType = {
    children: string;
    onChangeShirt: () => void;
    active: boolean;
}

function ChangeShirts({children, onChangeShirt, active}: ChangeShirtsType) {
    return (
        <button type='button' className={`tshirt-caption ${active ? 'active': ''}`} onClick={onChangeShirt}>
            {children}
        </button>
    )
}

export default ChangeShirts;